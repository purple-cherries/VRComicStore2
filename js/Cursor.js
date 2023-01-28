AFRAME.registerComponent('cursor-listener', {

    schema:{
        selectedId: {default:'', type:'string'}
    },

    init:function(){
        this.mouseEnterEvent()
        this.mouseLeaveEvent()
    },

    mouseEnterEvent:function(){

        this.el.addEventListener('mouseenter', ()=>{
            this.handleList()
        })
    },

    handleList: function(){
        const id= this.el.getAttribute('id')
        const comicId=['avengers', 'drstrange', 'spiderman', 'thor']
        if(comicId.includes(id)){
            const placeContainer= document.querySelector('#comic-container')
            placeContainer.setAttribute('cursor-listener', {selectedId:id})
            this.el.setAttribute('material', {color:'orange', opacity:1})
        }
    },

    mouseLeaveEvent:function(){
        this.el.addEventListener('mouseleave', ()=>{
            const {selectedId}= this.data
            if(selectedId){
                const el = document.querySelector(`#${selectedId}`)
                const id = el.getAttribute('id')
                if(id == selectedId){
                    el.setAttribute('material', {color:'brown', opacity:1})
                }
            }
        })
    }
} )