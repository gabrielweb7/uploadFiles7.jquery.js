# uploadFiles7.jquery.js
Plugin Jquery para configurar campo de upload!



- Html do projeto
```
<!-- Upload com campos personalizado pelo plugin jquery -->
<div class="form-group">
  <label for="uploadFiles7"> Foto </label>
  <div class="file-upload">
    <!-- buttonUploadAction -->
    <span class="btn btn-default mr-2" id="buttonUploadAction">Search</span>
    <!-- msgUploadFoto -->
    <span id="msgUploadFoto">No File Chosen</span>
    <!-- buttonRemover -->
    <span id="buttonRemover" class="btn btn-default ml-2" style="color: red;font-size: 12px;">Remover</span>
    <!-- input File -->
    <input type="file" class="form-control-file" id="uploadFiles7" name="foto"> 
    <!-- errorMenssage -->
    <div id="errorMenssage" style="display:none;color:red;font-size:12px;padding-top:13px;"></div>
  </div>
</div>
```

- Lembre de executar o Jquery antes de acionar o plugin

```
<script>	
  <!-- Configurações para Upload de Arquivos By Gabriel A. Barbosa *-* -->
  $(function() { 
    $("#uploadFiles7").uploadFiles7({ 
      buttonUploadById: "#buttonUploadAction",
      messageUploadById: "#msgUploadFoto",
      buttonRemoverById: "#buttonRemover",
      onlyExtensions: ["image/jpeg","image/jpg","image/png"],
      onErrorEvent: function(msg) { 
        $("#errorMenssage").html(msg).show(500);
      },
      onSuccess: function(file) { 
        $("#errorMenssage").hide(500);
      }
    });
  });
</script>
  ```
