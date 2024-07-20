import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{

  category={
    title:'',
    description:'',
  }

  constructor(private _category : CategoryService,private _snack:MatSnackBar){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  formSubmit(){
    if(this.category.title.trim()==null || this.category.title==''){
      this._snack.open("Title is required!!","ok",{
        duration:3000
      });
      return ;
    }
    if(this.category.description.trim()==null || this.category.description==''){
      this._snack.open("Description is required!!","ok",{
        duration:3000
      });
      return ;
    }

    //all done
  this._category.addCategory(this.category).subscribe(
    (data:any)=>{
      this.category.title='';
      this.category.description='';
      //success
      console.log(data);
         //alert on success
         Swal.fire({
          position: "center",
          icon: "success",
          title: "Category Added Successfully !!",
          // showConfirmButton: false,
          timer: 2000
        });
    },
    (error:any)=>{
      //error
      console.log(error);
       // alert('Something went wrong!!')
       Swal.fire({
        icon: "error",
        title: "Oops...Something went wrong!!",
        text: " Please try again !!",
        // footer: '<a href="#">Why do I have this issue?</a>'
      });
      this._snack.open("Something went wrong  !! Try Again !",'ok',{
        duration:3000
      })
    }
  )
  }

  
}
