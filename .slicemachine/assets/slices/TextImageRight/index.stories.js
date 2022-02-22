import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Qui enim aliqua laborum consectetur ullamco pariatur.","spans":[]}],"image":{"dimensions":{"width":250,"height":250},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=250&h=250&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => <MyComponent slice={{"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Consequat laboris anim cupidatat enim aliqua esse exercitation nulla eu deserunt pariatur reprehenderit tempor commodo sint. Id minim laborum officia cupidatat amet.","spans":[]}],"image":{"dimensions":{"width":250,"height":250},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=250&h=250&fit=crop"}},"id":"_TextImageLeft"}} />
_TextImageLeft.storyName = 'TextImageLeft'

export const _TitleImage = () => <MyComponent slice={{"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Fugiat nulla dolor sit qui irure cillum deserunt id minim velit est reprehenderit.","spans":[]}],"image":{"dimensions":{"width":250,"height":250},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587905069134-008460d7a636?w=250&h=250&fit=crop"}},"id":"_TitleImage"}} />
_TitleImage.storyName = 'TitleImage'
