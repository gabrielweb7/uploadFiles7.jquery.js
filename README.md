# uploadFiles7.jquery.js
Plugin Jquery para configurar campo de upload!






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
