import MyComponent from '../../../../slices/TextImageRight';

export default {
  title: 'slices/TextImageRight'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"text_image_right","items":[],"primary":{},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _TextImageLeft = () => <MyComponent slice={{"variation":"textImageLeft","name":"TextImageLeft","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Officia voluptate duis sunt duis incididunt laborum do reprehenderit exercitation enim minim nostrud.","spans":[]}],"image":{"dimensions":{"width":250,"height":250},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=250&h=250&fit=crop"}},"id":"_TextImageLeft"}} />
_TextImageLeft.storyName = 'TextImageLeft'

export const _TitleImage = () => <MyComponent slice={{"variation":"titleImage","name":"TitleImage","slice_type":"text_image_right","items":[],"primary":{"textField":[{"type":"paragraph","text":"Consequat exercitation magna aliquip id tempor. Et Lorem ex proident non consequat consequat consectetur Lorem id dolor proident sint fugiat. Velit do elit ullamco tempor sit excepteur in nostrud culpa nulla magna adipisicing excepteur Lorem.","spans":[]}],"image":{"dimensions":{"width":250,"height":250},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=250&h=250&fit=crop"}},"id":"_TitleImage"}} />
_TitleImage.storyName = 'TitleImage'
