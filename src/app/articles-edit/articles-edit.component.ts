import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleViewService} from '../_services/article-view.service';
import { ArticleEditService} from '../_services/article-edit.service';
import { Article } from '../_models/article';
import { CategoriesDeleteService } from '../_services/categories-delete.service';
import { FindTagsArticleService } from '../_services/find-tags-article.service';
import { ObtenerCategoriasArticuloService } from '../_services/obtener-categorias-articulo.service';
import { TagsService } from '../_services/tags.service';
import { Categories } from '../_models/categories';
import { Tags } from '../_models/tags';
import { AlertService } from '../_services';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray} from '@angular/forms';

declare function myMehtod(model): any;
@Component({
  selector: 'app-articles-edit',
  templateUrl: './articles-edit.component.html',
  styleUrls: ['./articles-edit.component.css']
})
export class ArticlesEditComponent implements OnInit {
  
  model: any = {};
  loading = false;
  article: Article;  
  category: Categories;  
  tag: Tags; 
  form: FormGroup;

  /*IMAGE */
  imageError: string;
  isImageSaved: boolean;
  cardImageBase64: string;

  categories: any = {};
  tags: any = {};

  tagsSelected = [];
  categoriesSelected = [];
  constructor(private activeAouter: ActivatedRoute, 
    private router: Router,
    private tagsService: TagsService,
    private categoriesDeleteService: CategoriesDeleteService,
    private articleViewService: ArticleViewService,
    private articleEditService: ArticleEditService,
    private obtenerCategoriasByArticle: ObtenerCategoriasArticuloService,
    private findTagsArticleService: FindTagsArticleService,
    private alertService: AlertService,
    private apiService: TagsService,    
    private formBuilder: FormBuilder
  ) { 

  this.form = this.formBuilder.group({
    website: this.formBuilder.array([], [Validators.required])
    })
  }

  updateArticle = new FormGroup({
    title: new FormControl(),
    slug: new FormControl(),
    username: new FormControl(),
    content: new FormControl(),
    mainImage: new FormControl(),
    description: new FormControl(),
    createdDate: new FormControl(),
    language: new FormControl()
  });
  
  ngOnInit() {
    const id = this.activeAouter.snapshot.params['id'];
    this.getArticleById(id);    
    this.getCategoriasByArticle(id);
    this.getTagsByArticle(id);
  } 

  getArticleById(id) {
    this.articleViewService.getArticleById(id).subscribe(data => {

        this.article = data;
    });
  }

  deleteTagFromArticle(tagId:number,articleId:number){
    this.apiService.deleteArticleFromTag(tagId,articleId).subscribe(data => {    
      this.tag = data;    
    }, error => console.log(error));
  }
  
  deleteCategoryFromArticle(categoryId:number,articleId:number){
    this.categoriesDeleteService.deleteArticleCategory(categoryId,articleId).subscribe(data => {    
      this.category = data;    
    }, error => console.log(error));
  }

  submit(){
    this.model.id = this.activeAouter.snapshot.params['id'];
    this.model.title = this.updateArticle.get('title').value;
    this.model.slug = this.updateArticle.get('slug').value;
    this.model.username = this.updateArticle.get('username').value;
    this.model.language = this.updateArticle.get('language').value;
    this.model.content = this.updateArticle.get('content').value;
    this.model.mainImage = this.cardImageBase64;
    this.model.description = this.updateArticle.get('description').value;    
    this.model.createdDate = this.updateArticle.get('createdDate').value;    
    this.model.categories = this.categoriesSelected;
    this.articleEditService.update(this.model)
    .subscribe(
        data => {
            this.alertService.success('Update successful', true);
            this.router.navigate(['/dashboard/articles']);
        },
        error => {
            this.alertService.error(error);
            this.loading = false;
        });
  }

  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;
        if (fileInput.target.files[0].size > max_size) {
            this.imageError ='Maximum size allowed is ' + max_size / 1000 + 'Mb';
            return false;
        }        
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

getCategoriasByArticle(id){
  this.obtenerCategoriasByArticle.getCategoriesPorArticulo(id).subscribe(
    data=>{        
      this.categories=data;
      for(let cat of this.categories) {
        if(cat.hasCategory==true){
          this.categoriesSelected.push(cat);
        }
      }
    },
    (error)=>{ 
      console.log("Error");
    }
  );
}

getTagsByArticle(id){
  this.findTagsArticleService.getTagsPorArticulo(id).subscribe(
    data=>{        
      this.tags=data;
    },
    (error)=>{ 
      console.log("Error");
    }
  );
}

onCheckCategories(event,$value){ 
  if ( event.target.checked ) {      
    this.categoriesSelected.push($value);
  }else{
    const index: number = this.categoriesSelected.indexOf($value);
    this.categoriesSelected.splice(index, 1);
  }
}

    
}
  

  
  
  

