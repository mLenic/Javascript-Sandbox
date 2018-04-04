document.addEventListener('DOMContentLoaded', function(event) {

    msgBoard = new MessageBoard('alertmsg', '', null);

    function MessageBoard (element_id, message, mode){
        this.element = document.getElementById(element_id);
        this.message = message;
        this.mode = mode;    
    }

    MessageBoard.prototype.hideBoard = function(){
        this.element.style.display = 'none';
    }
    MessageBoard.prototype.showBoard = function(){
        this.element.style.display = 'block';
    }
    MessageBoard.prototype.setMessageBoard = function(message, mode){    
        this.message = message;
        if(mode === 'success'){
            this.element.className = 'alert alert-success';
        } else if(mode === 'alert'){
            this.element.className = 'alert alert-danger';
        }
        this.element.getElementsByTagName('p')[0].innerHTML = message;
    }
    MessageBoard.prototype.setAndShowBoard = function (message, mode='success'){
        this.setMessageBoard(message, mode);
        this.showBoard();
    } 

});
