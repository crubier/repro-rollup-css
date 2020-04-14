import React, { useState, useRef } from "react";



import {
  EditorState,
  ContentState,
  RichUtils,
  getDefaultKeyBinding,
  convertToRaw,
  convertFromRaw
} from "draft-js";

import createEmojiPlugin from "draft-js-emoji-plugin";
import createImagePlugin from "draft-js-image-plugin";
import createVideoPlugin from "draft-js-video-plugin";
import createLinkifyPlugin from "draft-js-linkify-plugin";
import createAlignmentPlugin from "draft-js-alignment-plugin";
import createFocusPlugin from "draft-js-focus-plugin";
import createResizeablePlugin from "draft-js-resizeable-plugin";
import createBlockDndPlugin from "draft-js-drag-n-drop-plugin";


import "draft-js-emoji-plugin/lib/plugin.css";
import "draft-js-image-plugin/lib/plugin.css";
import "draft-js-linkify-plugin/lib/plugin.css";
import "draft-js-alignment-plugin/lib/plugin.css";
import "draft-js-focus-plugin/lib/plugin.css";

export default {};
