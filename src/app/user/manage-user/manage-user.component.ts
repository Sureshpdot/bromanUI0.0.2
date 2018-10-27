import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonTitle } from '../../title/title.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {

  constructor(private commonTitle : CommonTitle,private title:Title) { }

  // ENABLE EDIT OPTIONS
  enable: boolean = false;

  ngOnInit() {
    //SET TITLE
    this.title.setTitle(this.commonTitle.title+ "Manage users");
  }

  sweetAlert2() {
      swal({
        title: "Delete Dinesh?",
        text: "We'll remove them and send your a confirmation email",            
        showCancelButton: true,
        cancelButtonColor : '#ff5405',
        confirmButtonText: "Delete",
        cancelButtonText: 'Cancel',        
        allowOutsideClick : false,
        reverseButtons : true,        
      }).then((result) => {
        if (result.value) {
          swal(
            'Deleted!'
            )
        } else if (
          // Read more about handling dismissals
          result.dismiss === swal.DismissReason.cancel
        ) {
          swal(
            'Cancelled'     
          )
        }
      })
  } 

  editExternal(){
    (<any>$('#add-external')).modal('show'); 
    this.enable = true;
  }
  
  editUser(){
    (<any>$('#add-user')).modal('show');
    this.enable = true;
  }

}
