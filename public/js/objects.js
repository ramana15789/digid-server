function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

function Form(parameters) {
    this.key = parameters.key;
    this.type = parameters.type;
    this.inputType = parameters.inputType;
    this.label = parameters.label;
    this.hint = parameters.hint;
    this.isMandatory = parameters.isMandatory;

}

function Response(parameters) {
    this.parameters = parameters;
}


