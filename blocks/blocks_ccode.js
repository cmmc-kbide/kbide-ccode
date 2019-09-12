Blockly.Blocks['block_raw1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("int xxx = 123;"), "code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("write your c code to here");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_raw2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("(xxx == 123)"), "code");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("write your c code to here");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['block_raw1_ext'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["include (EXTINC)","EXTINC"], ["variable (VARIABLE)","VARIABLE"], ["function (FUNCTION)","FUNCTION"], ["setup (SETUP_CODE)","SETUP_CODE"], ["loop (LOOP_EXT_CODE)","LOOP_EXT_CODE"]]), "NAME");
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("#include \"stdlib.h\""), "code");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("write your c code to here");
 this.setHelpUrl("");
  }
};