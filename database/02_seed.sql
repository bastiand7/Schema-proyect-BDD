
INSERCIÓN DE DATOS DE PRUEBA SEED
Orden estricto para respetar Foreign Keys


-- 1. Insertar Roles
INSERT INTO Rol (nombre, descripcion) VALUES
('Administrador', 'Acceso total al punto de venta y configuración'),
('Instalador', 'Acceso a la app móvil para ver agenda y reportar material');

-- 2. Insertar Clientes
INSERT INTO Cliente (nombres, apellidos, telefono, correo, calle_numero, colonia, ciudad, tipoCliente) VALUES
('Juan', 'Pérez', '8112345678', 'juan.perez@email.com', 'Calle Falsa 123', 'Centro', 'Monterrey', 'Residencial'),
('María', 'González', '8187654321', 'maria.g@email.com', 'Av. Leones 456', 'Cumbres', 'Monterrey', 'Comercial');

-- 3. Insertar Productos (Catálogo de Inventario)
INSERT INTO Producto (nombre, categoria, marca, modelo, capacidad, stockActual, unidadMedida) VALUES
('Minisplit Inverter', 'Equipo', 'LG', 'DualCool', '1.5 Toneladas', 10.00, 'Pieza'),
('Tubería de Cobre', 'Material', 'Nacional', '3/8', 'N/A', 100.00, 'Metro'),
('Cable de Uso Rudo', 'Material', 'Condumex', 'Calibre 12', 'N/A', 50.00, 'Metro');

-- 4. Insertar Usuarios (Técnicos/Empleados)
-- Nota: idRol 1 = Admin, idRol 2 = Instalador
INSERT INTO Usuario (idRol, nombres, apellidos, correo, password, telefono) VALUES
(1, 'Carlos', 'Administrador', 'admin@rgclimas.com', 'hash_password_aqui', '8100001111'),
(2, 'Luis', 'Técnico', 'luis.tec@rgclimas.com', 'hash_password_aqui', '8122223333');

-- 5. Insertar Servicios (Agenda)
-- Nota: idCliente 1 (Juan), idUsuario 2 (Luis el técnico)
INSERT INTO Servicio (idCliente, idUsuario, tipoServicio, estado, fechaProgramada, horaInicio, horaFin, observaciones) VALUES
(1, 2, 'Instalación', 'Concluido', '2026-09-20', '09:00:00', '13:00:00', 'Instalación en planta baja'),
(2, 2, 'Mantenimiento', 'Programado', '2026-09-21', '10:00:00', '12:00:00', 'Revisión de gas');

-- 6. Insertar Consumo de Material en Servicio (Relación M:N)
-- Nota: Servicio 1 consumió 1 Minisplit y 5 metros de tubería
INSERT INTO Servicio_Producto (idServicio, idProducto, cantidadUtilizada) VALUES
(1, 1, 1.00),
(1, 2, 5.00);

-- 7. Insertar Material Sobrante (Entidad Débil)
-- Nota: Del Servicio 1, el técnico reporta que le sobró 1.5 metros de tubería en buen estado
INSERT INTO Material_Sobrante (idServicio, idProducto, cantidad, condicion, descripcion) VALUES
(1, 2, 1.50, 'Reutilizable', 'Sobrante de tubería de cobre tras instalación');
