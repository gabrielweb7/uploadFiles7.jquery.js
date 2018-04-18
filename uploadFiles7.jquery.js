/**
* ♥ uploadFiles7 Jquery Plugin  ♥
* _Autor: Gabriel Azuaga Barbosa
* _Descrição: Possibilita criar um campo de upload personalizado com botão e input invisvel
*             pré carregamento de imagens em base64 e validação de arquivos e tamanho em kbytes
* _Version: 1.0 _Criado em: 18/04/2018
* _Github: https://github.com/gabrielweb7/uploadFiles7.jquery.js
**/
(function ( $ ) {
 
    $.fn.uploadFiles7 = function( options ) {
 
        // Default options
        var settings = $.extend({
            name: 'John Doe',
            color: 'orange'
        }, options );
 
        // Apply options
        return this.append('Hello ' + settings.name + '!').css({ color: settings.color });
 
    };
 
}( jQuery ));