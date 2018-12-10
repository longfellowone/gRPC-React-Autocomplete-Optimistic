/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.Todo.Empty', null, global);
goog.exportSymbol('proto.Todo.FindProductRequest', null, global);
goog.exportSymbol('proto.Todo.FindProductResponse', null, global);
goog.exportSymbol('proto.Todo.Index', null, global);
goog.exportSymbol('proto.Todo.Product', null, global);
goog.exportSymbol('proto.Todo.RemoveTaskRequest', null, global);
goog.exportSymbol('proto.Todo.Task', null, global);
goog.exportSymbol('proto.Todo.TaskResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Todo.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.Empty.displayName = 'proto.Todo.Empty';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.Empty.prototype.toObject = function(opt_includeInstance) {
    return proto.Todo.Empty.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.Empty} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.Empty.toObject = function(includeInstance, msg) {
    var f,
      obj = {};

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.Empty}
 */
proto.Todo.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.Empty();
  return proto.Todo.Empty.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.Empty}
 */
proto.Todo.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Todo.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.Task.displayName = 'proto.Todo.Task';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.Task.prototype.toObject = function(opt_includeInstance) {
    return proto.Todo.Task.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.Task} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.Task.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        uuid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        message: jspb.Message.getFieldWithDefault(msg, 2, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.Task}
 */
proto.Todo.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.Task();
  return proto.Todo.Task.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.Task}
 */
proto.Todo.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setUuid(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setMessage(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
};

/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.Todo.Task.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Todo.Task.prototype.setUuid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string message = 2;
 * @return {string}
 */
proto.Todo.Task.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.Todo.Task.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.TaskResponse = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.Todo.TaskResponse.repeatedFields_,
    null,
  );
};
goog.inherits(proto.Todo.TaskResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.TaskResponse.displayName = 'proto.Todo.TaskResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Todo.TaskResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.TaskResponse.prototype.toObject = function(opt_includeInstance) {
    return proto.Todo.TaskResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.TaskResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.TaskResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        tasksList: jspb.Message.toObjectList(
          msg.getTasksList(),
          proto.Todo.Task.toObject,
          includeInstance,
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.TaskResponse}
 */
proto.Todo.TaskResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.TaskResponse();
  return proto.Todo.TaskResponse.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.TaskResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.TaskResponse}
 */
proto.Todo.TaskResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.Todo.Task();
        reader.readMessage(value, proto.Todo.Task.deserializeBinaryFromReader);
        msg.addTasks(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.TaskResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.TaskResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.TaskResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.TaskResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(1, f, proto.Todo.Task.serializeBinaryToWriter);
  }
};

/**
 * repeated Task tasks = 1;
 * @return {!Array<!proto.Todo.Task>}
 */
proto.Todo.TaskResponse.prototype.getTasksList = function() {
  return /** @type{!Array<!proto.Todo.Task>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.Todo.Task,
    1,
  ));
};

/** @param {!Array<!proto.Todo.Task>} value */
proto.Todo.TaskResponse.prototype.setTasksList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.Todo.Task=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Todo.Task}
 */
proto.Todo.TaskResponse.prototype.addTasks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.Todo.Task,
    opt_index,
  );
};

proto.Todo.TaskResponse.prototype.clearTasksList = function() {
  this.setTasksList([]);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.RemoveTaskRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Todo.RemoveTaskRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.RemoveTaskRequest.displayName = 'proto.Todo.RemoveTaskRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.RemoveTaskRequest.prototype.toObject = function(
    opt_includeInstance,
  ) {
    return proto.Todo.RemoveTaskRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.RemoveTaskRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.RemoveTaskRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        uuid: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.RemoveTaskRequest}
 */
proto.Todo.RemoveTaskRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.RemoveTaskRequest();
  return proto.Todo.RemoveTaskRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.RemoveTaskRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.RemoveTaskRequest}
 */
proto.Todo.RemoveTaskRequest.deserializeBinaryFromReader = function(
  msg,
  reader,
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setUuid(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.RemoveTaskRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.RemoveTaskRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.RemoveTaskRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.RemoveTaskRequest.serializeBinaryToWriter = function(
  message,
  writer,
) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.Todo.RemoveTaskRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Todo.RemoveTaskRequest.prototype.setUuid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.Product = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.Todo.Product.repeatedFields_,
    null,
  );
};
goog.inherits(proto.Todo.Product, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.Product.displayName = 'proto.Todo.Product';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Todo.Product.repeatedFields_ = [3];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.Product.prototype.toObject = function(opt_includeInstance) {
    return proto.Todo.Product.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.Product} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.Product.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        uuid: jspb.Message.getFieldWithDefault(msg, 1, ''),
        name: jspb.Message.getFieldWithDefault(msg, 2, ''),
        indexsList: jspb.Message.toObjectList(
          msg.getIndexsList(),
          proto.Todo.Index.toObject,
          includeInstance,
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.Product}
 */
proto.Todo.Product.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.Product();
  return proto.Todo.Product.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.Product} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.Product}
 */
proto.Todo.Product.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setUuid(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      case 3:
        var value = new proto.Todo.Index();
        reader.readMessage(value, proto.Todo.Index.deserializeBinaryFromReader);
        msg.addIndexs(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.Product.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.Product.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.Product} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.Product.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getIndexsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(3, f, proto.Todo.Index.serializeBinaryToWriter);
  }
};

/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.Todo.Product.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Todo.Product.prototype.setUuid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string name = 2;
 * @return {string}
 */
proto.Todo.Product.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
};

/** @param {string} value */
proto.Todo.Product.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * repeated Index indexs = 3;
 * @return {!Array<!proto.Todo.Index>}
 */
proto.Todo.Product.prototype.getIndexsList = function() {
  return /** @type{!Array<!proto.Todo.Index>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.Todo.Index,
    3,
  ));
};

/** @param {!Array<!proto.Todo.Index>} value */
proto.Todo.Product.prototype.setIndexsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};

/**
 * @param {!proto.Todo.Index=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Todo.Index}
 */
proto.Todo.Product.prototype.addIndexs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    3,
    opt_value,
    proto.Todo.Index,
    opt_index,
  );
};

proto.Todo.Product.prototype.clearIndexsList = function() {
  this.setIndexsList([]);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.Index = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Todo.Index, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.Index.displayName = 'proto.Todo.Index';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.Index.prototype.toObject = function(opt_includeInstance) {
    return proto.Todo.Index.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.Index} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.Index.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        index: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.Index}
 */
proto.Todo.Index.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.Index();
  return proto.Todo.Index.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.Index} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.Index}
 */
proto.Todo.Index.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setIndex(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.Index.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.Index.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.Index} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.Index.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string index = 1;
 * @return {string}
 */
proto.Todo.Index.prototype.getIndex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Todo.Index.prototype.setIndex = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.FindProductRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Todo.FindProductRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.FindProductRequest.displayName = 'proto.Todo.FindProductRequest';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.FindProductRequest.prototype.toObject = function(
    opt_includeInstance,
  ) {
    return proto.Todo.FindProductRequest.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.FindProductRequest} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.FindProductRequest.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        name: jspb.Message.getFieldWithDefault(msg, 1, ''),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.FindProductRequest}
 */
proto.Todo.FindProductRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.FindProductRequest();
  return proto.Todo.FindProductRequest.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.FindProductRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.FindProductRequest}
 */
proto.Todo.FindProductRequest.deserializeBinaryFromReader = function(
  msg,
  reader,
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {string} */ (reader.readString());
        msg.setName(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.FindProductRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.FindProductRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.FindProductRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.FindProductRequest.serializeBinaryToWriter = function(
  message,
  writer,
) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(1, f);
  }
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.Todo.FindProductRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
};

/** @param {string} value */
proto.Todo.FindProductRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Todo.FindProductResponse = function(opt_data) {
  jspb.Message.initialize(
    this,
    opt_data,
    0,
    -1,
    proto.Todo.FindProductResponse.repeatedFields_,
    null,
  );
};
goog.inherits(proto.Todo.FindProductResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.Todo.FindProductResponse.displayName = 'proto.Todo.FindProductResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.Todo.FindProductResponse.repeatedFields_ = [1];

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.Todo.FindProductResponse.prototype.toObject = function(
    opt_includeInstance,
  ) {
    return proto.Todo.FindProductResponse.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.Todo.FindProductResponse} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.Todo.FindProductResponse.toObject = function(includeInstance, msg) {
    var f,
      obj = {
        productsList: jspb.Message.toObjectList(
          msg.getProductsList(),
          proto.Todo.Product.toObject,
          includeInstance,
        ),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Todo.FindProductResponse}
 */
proto.Todo.FindProductResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Todo.FindProductResponse();
  return proto.Todo.FindProductResponse.deserializeBinaryFromReader(
    msg,
    reader,
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Todo.FindProductResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Todo.FindProductResponse}
 */
proto.Todo.FindProductResponse.deserializeBinaryFromReader = function(
  msg,
  reader,
) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = new proto.Todo.Product();
        reader.readMessage(
          value,
          proto.Todo.Product.deserializeBinaryFromReader,
        );
        msg.addProducts(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Todo.FindProductResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Todo.FindProductResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Todo.FindProductResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Todo.FindProductResponse.serializeBinaryToWriter = function(
  message,
  writer,
) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.Todo.Product.serializeBinaryToWriter,
    );
  }
};

/**
 * repeated Product products = 1;
 * @return {!Array<!proto.Todo.Product>}
 */
proto.Todo.FindProductResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.Todo.Product>} */ (jspb.Message.getRepeatedWrapperField(
    this,
    proto.Todo.Product,
    1,
  ));
};

/** @param {!Array<!proto.Todo.Product>} value */
proto.Todo.FindProductResponse.prototype.setProductsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};

/**
 * @param {!proto.Todo.Product=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Todo.Product}
 */
proto.Todo.FindProductResponse.prototype.addProducts = function(
  opt_value,
  opt_index,
) {
  return jspb.Message.addToRepeatedWrapperField(
    this,
    1,
    opt_value,
    proto.Todo.Product,
    opt_index,
  );
};

proto.Todo.FindProductResponse.prototype.clearProductsList = function() {
  this.setProductsList([]);
};

goog.object.extend(exports, proto.Todo);
