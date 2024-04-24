# Transistion Document
This document is here to help the next set of contributors pick up where the last set left off, providing an idea of what to work on next and any considerations that have to be made that is not explicitly in the files.

## Next Steps
As of April 24, 2024, here are current tasks that need to be worked on.
- Blender Model GIFs.
  - Use a React Native library to handle GIFs.
  - Create GIFs for each possible state.
  - Program app to show appropriate GIF for each state.
    - Tapping the front wheels should make the wheels transition to an exploded view.
- Fix font size bugs.
  - Different resolutions mess with font sizes.
  - Some users may use accessability settings such as larger or smaller text, which makes all font sizes bigger or smaller.
- Blender Model.
  - Higher quality model.
    - More detail with individual parts to improve exploded view.
    - Parts are individual meshses and not lumped together as one mesh.
  - Better textures.
    - Should look more like the actual dragster and not a toy model.
- UI.
  - Needs revamp. Currently servicable, but can look better.
  - Some sizing issues that relate to font size bugs.

## Considerations
As of April 24, 2024, here are some things to keep in mind when programming and managing the app.
- Uses React Native and ExpoGo as lnaguage and development environment.
- Does not access the internet or take user information, which simplifies App and Play store requirements.
- The blender file can be found here: https://drive.google.com/file/d/1iKxYhQxvDIZdQNLmOp5NLb81MGuav-D1/view?usp=sharing.
- If you have any questions feel free to email a previous contributor for help.
