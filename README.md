- component: menu, iframe, 
- layout: how component, content show up in view
- content: basis content : text, image, video, audio
- build-in:
 + text editor
 + image preview
 + video, audio player

STEP:
1. draggable unit with snap on, resize, stack, delete, no auto-sort
2. make content unit inherit form drag unit
3. plugable content
4. save page as html include position
5. render saved page as html

STRUCTURE
[unit]: dragable box
[content]: content inside [unit]
 - base: image, button-like, text, video, audio, frame. not suppose to be simple but this kind of content show up in all website.
 - derived: select box, dropdown, menu, collapse,...
[component] [unit] + [content]
[layout]: collection of [component] and it's position 
