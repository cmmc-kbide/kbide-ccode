Blockly.JavaScript['block_raw1'] = function(block) {
  var text_code = block.getFieldValue('code');
  var code = `${text_code}\n`;
  return code;
};

Blockly.JavaScript['block_raw2'] = function(block) {
  var text_code = block.getFieldValue('code');
  var code = `${text_code}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['block_raw1_ext'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var text_code = block.getFieldValue('code');
  var code = `#${dropdown_name}
${text_code}
#END
`;
  return code;
};