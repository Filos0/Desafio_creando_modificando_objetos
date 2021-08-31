//funcion constructora del consultorio
function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes || [];

}

//funcion constructora de los pacientes
function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;
    //getters
    Object.defineProperty(this, "_getNombre", {
        get: function() {
            return _nombre
        }
    });

    Object.defineProperty(this, "_getEdad", {
        get: function() {
            return _edad
        }
    });

    Object.defineProperty(this, "_getRut", {
        get: function() {
            return _rut
        }
    });

    Object.defineProperty(this, "_getDiagnostico", {
        get: function() {
            return _diagnostico
        }
    });
    //setters

    Object.defineProperty(this, "_setNombre", {
        set: function(nombre) {
            _nombre = nombre
        }
    });

    Object.defineProperty(this, "_setEdad", {
        set: function(edad) {
            _edad = edad
        }
    });

    Object.defineProperty(this, "_setRut", {
        set: function(rut) {
            _rut = rut
        }
    });

    Object.defineProperty(this, "_setDiagnostico", {
        set: function(diagnostico) {
            _diagnostico = diagnostico
        }
    });
}



//prototypes get/set
Paciente.prototype.getNombre = function() {
    return this._getNombre;
};


Paciente.prototype.setNombre = function(nombre) {
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function() {
    return this._getEdad;
};


Paciente.prototype.setEdad = function(edad) {
    this._setEdad = edad;
};

Paciente.prototype.getRut = function() {
    return this._getRut;
};


Paciente.prototype.setRut = function(rut) {
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function() {
    return this._getDiagnostico;
};


Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._setDiagnostico = diagnostico;
};





//instanciando

//pacientes ingresados
var paciente1 = new Paciente('Felipe', '32', '171192110', 'amsiedad');
var paciente2 = new Paciente('Alejandro', '23', '16222444k', 'fealdad');


var p1 = [paciente1.getNombre(), paciente1.getEdad(), paciente1.getRut(), paciente1.getDiagnostico()];
console.log(p1)
var p2 = [paciente2.getNombre(), paciente2.getEdad(), paciente2.getRut(), paciente2.getDiagnostico()];
console.log(p2)


//consultorio
consultorio1 = new Consultorio('Arkham Asylum', [p1, p2]);
console.log(consultorio1);

//mostrar datos
Consultorio.prototype.mostrarDatos = function() {
    console.log(`${this.pacientes}`);
}
consultorio1.mostrarDatos();

Paciente.prototype.buscarPaciente = function() {
    //let buscar = "Felipe";
    let buscar = "Alejandro"

    if (buscar == paciente1.getNombre()) {

        console.log(`${paciente2.getNombre()}`);


    } else {
        console.log('Error al encontrar el paciente')
    }
}

paciente2.buscarPaciente();