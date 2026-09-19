CREATE TABLE Rol (
    idRol INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE,
    descripcion VARCHAR(255)
);

CREATE TABLE Cliente (
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    correo VARCHAR(100) UNIQUE,
    calle_numero VARCHAR(150),
    colonia VARCHAR(100),
    ciudad VARCHAR(100),
    tipoCliente VARCHAR(50) DEFAULT 'Residencial'
);

CREATE TABLE Producto (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    marca VARCHAR(50),
    modelo VARCHAR(50),
    capacidad VARCHAR(50),
    stockActual DECIMAL(10,2) DEFAULT 0.00,
    unidadMedida VARCHAR(20) NOT NULL
);

CREATE TABLE Usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    idRol INT NOT NULL,
    nombres VARCHAR(100) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    estatus BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (idRol) REFERENCES Rol(idRol)
);

CREATE TABLE Servicio (
    idServicio INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT NOT NULL,
    idUsuario INT NOT NULL,
    tipoServicio VARCHAR(50) NOT NULL,
    estado VARCHAR(50) DEFAULT 'Programado',
    fechaProgramada DATE NOT NULL,
    horaInicio TIME NOT NULL,
    horaFin TIME NOT NULL,
    observaciones TEXT,
    FOREIGN KEY (idCliente) REFERENCES Cliente(idCliente),
    FOREIGN KEY (idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Servicio_Producto (
    idServicio INT NOT NULL,
    idProducto INT NOT NULL,
    cantidadUtilizada DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (idServicio, idProducto),
    FOREIGN KEY (idServicio) REFERENCES Servicio(idServicio),
    FOREIGN KEY (idProducto) REFERENCES Producto(idProducto)
);

CREATE TABLE Material_Sobrante (
    idSobrante INT AUTO_INCREMENT PRIMARY KEY,
    idServicio INT NOT NULL,
    idProducto INT NOT NULL,
    cantidad DECIMAL(10,2) NOT NULL,
    condicion VARCHAR(50) NOT NULL,
    descripcion VARCHAR(255),
    FOREIGN KEY (idServicio) REFERENCES Servicio(idServicio),
    FOREIGN KEY (idProducto) REFERENCES Producto(idProducto)
);
