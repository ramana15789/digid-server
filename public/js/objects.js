function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Form(parameters) {
    this.key = parameters.key;
    this.field_type = parameters.field_type;
    this.label = parameters.label;
    this.hint = parameters.hint;
    this.is_mandatory = parameters.is_mandatory;
    this.is_local = parameters.is_local;
    this.options = parameters.options;
}

function Response(parameters) {
    this.parameters = parameters;
}


