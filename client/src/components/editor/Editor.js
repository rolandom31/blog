import React from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export  function Editor(){
    return(
        <div>
            <h1>article</h1>
            <CKEditor editor = {ClassicEditor}
             onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            />
        </div>
    )
}

