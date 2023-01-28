AFRAME.registerComponent('tour',{

    init:function(){
        this.placesContainer= this.el
        this.createCards()
    },
    createCards:function(){
        const thumbnails=[
            {id:'avengers', title:'The Avengers', url:'./assets/comics/avengers.jpg'},
            {id:'drstrange', title:'Dr. Strange', url:'./assets/comics/dr.strange.jpg'},
            {id:'spiderman', title:'Spiderman', url:'./assets/comics/spiderman.jpg'},
            {id:'thor', title:'Thor', url:'./assets/comics/thor.jpg'},
        ]
        let previousX= -60
        for(var i of thumbnails){
            const posX=previousX+25
            const posY=8
            const posZ=-40
            const position={x:posX, y:posY, z:posZ}
            previousX=posX
            const border=this.createBorder(position, i.id)
            const thumbnail= this.createThumbnails(i)
            border.appendChild(thumbnail)
            this.placesContainer.appendChild(border)
        }
    },

    createBorder:function(position, id){
        const entity= document.createElement('a-entity')
        
        entity.setAttribute("id", id)
        entity.setAttribute("visible", true)
        entity.setAttribute('geometry', {primitive:'plane', width:22 , height: 30})
        entity.setAttribute('position',position)
        entity.setAttribute('material',  {color:'brown',opacity:1})
        entity.setAttribute('cursor-listener', {})
        return entity
    },

    createThumbnails:function(i){
        const entity= document.createElement('a-entity')
        entity.setAttribute('visibile', true)
        entity.setAttribute('geometry', {primitive:'plane', width: 20, height:28})
        entity.setAttribute('position', {x:0, y:0, z:0.1})
        entity.setAttribute('material', {src:i.url})
        return entity
    }
})
