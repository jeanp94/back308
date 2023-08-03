CREATE TABLE Coberturas (
  ID_Cobertura          NUMBER PRIMARY KEY,
  Nombre_Cobertura      VARCHAR2(100),
  Descripcion           VARCHAR2(500)
);

CREATE TABLE Seguros (
  ID_Seguro          NUMBER PRIMARY KEY,
  ID_Cobertura       NUMBER,
  Nombre_Seguro      VARCHAR2(100),
  Descripcion        VARCHAR2(500),
  Precio             VARCHAR2(20),
  Moneda             CHAR(3),
  Duracion           VARCHAR2(50),
  FOREIGN KEY (ID_Cobertura) REFERENCES Coberturas(ID_Cobertura)
);

CREATE TABLE Clientes (
  ID_Cliente          NUMBER PRIMARY KEY,
  Nombre_Cliente      VARCHAR2(100),
  Direccion           VARCHAR2(200),
  Correo_Electronico  VARCHAR2(100),
  Numero_Telefono     VARCHAR2(20),
  Fecha_Nacimiento    DATE,
  Sexo                CHAR(1)
);

CREATE TABLE Polizas (
  ID_Poliza          NUMBER PRIMARY KEY,
  ID_Cliente         NUMBER,
  ID_Seguro          NUMBER,
  Fecha_Inicio       DATE,
  Fecha_Vencimiento  DATE,
  Estado_Poliza      VARCHAR2(25),
  FOREIGN KEY (ID_Cliente) REFERENCES Clientes(ID_Cliente),
  FOREIGN KEY (ID_Seguro) REFERENCES Seguros(ID_Seguro)
);

CREATE TABLE Pagos (
  ID_Pago          INT PRIMARY KEY,
  ID_Poliza        INT,
  Fecha_Pago       DATE,
  Total_Pago       DECIMAL(10, 2),
  Moneda           CHAR(3),
  FOREIGN KEY (ID_Poliza) REFERENCES Polizas(ID_Poliza)
);

CREATE TABLE DetallePagos (
  ID_Detalle_Pago         INT PRIMARY KEY,
  ID_Pago                 INT,
  Monto_Pago_Detalle      DECIMAL(10, 2),
  Metodo_Pago             VARCHAR(50),
  Moneda                  CHAR(3),
  FOREIGN KEY (ID_Pago) REFERENCES Pagos(ID_Pago)
);


/* Insertar Datos Tabla Coberturas */
INSERT INTO Coberturas (ID_Cobertura, Nombre_Cobertura, Descripcion)
VALUES (1, 'Seguro de Vida', 'Cobertura que protege en caso de fallecimiento.');
INSERT INTO Coberturas (ID_Cobertura, Nombre_Cobertura, Descripcion)
VALUES (2, 'Seguro de Salud', 'Cobertura medica para gastos de salud.');
INSERT INTO Coberturas (ID_Cobertura, Nombre_Cobertura, Descripcion)
VALUES (3, 'Seguro de Automovil', 'Cobertura para danos a vehiculos y terceros.');

/* Insertar Datos Tabla Seguros */
INSERT INTO Seguros (ID_Seguro, ID_Cobertura, Nombre_Seguro, Descripcion, Precio, Moneda, Duracion)
VALUES (1, 1, 'Vida Total', 'Cobertura completa de seguro de vida.', '500', 'PEN', 'Anual');
INSERT INTO Seguros (ID_Seguro, ID_Cobertura, Nombre_Seguro, Descripcion, Precio, Moneda, Duracion)
VALUES (2, 2, 'Salud Basico', 'Cobertura medica basica.', '200', 'USD', 'Mensual');
INSERT INTO Seguros (ID_Seguro, ID_Cobertura, Nombre_Seguro, Descripcion, Precio, Moneda, Duracion)
VALUES (3, 3, 'Auto Terceros', 'Cobertura para danos a terceros.', '300', 'PEN', 'Anual');

/* Insertar Datos Tabla Clientes */
INSERT INTO Clientes (ID_Cliente, Nombre_Cliente, Direccion, Correo_Electronico, Numero_Telefono, Fecha_Nacimiento, Sexo)
VALUES (1, 'Juan Perez', 'Calle 123, Lima', 'juan.perez@example.com', '999888777', TO_DATE('1985-03-15','YYYY-MM-DD'), 'M');
INSERT INTO Clientes (ID_Cliente, Nombre_Cliente, Direccion, Correo_Electronico, Numero_Telefono, Fecha_Nacimiento, Sexo)
VALUES (2, 'Maria Gomez', 'Jr. Paz 451, Tacna', 'maria.gomez@example.com', '999999888', TO_DATE('1990-11-22','YYYY-MM-DD'), 'F');
INSERT INTO Clientes (ID_Cliente, Nombre_Cliente, Direccion, Correo_Electronico, Numero_Telefono, Fecha_Nacimiento, Sexo)
VALUES (3, 'Carlos Lopez', 'Calle 8, Ica', 'carlos.lopez@example.com', '999888999', TO_DATE('1988-07-10','YYYY-MM-DD'), 'M');

/* Insertar Datos Tabla Polizas */
INSERT INTO Polizas (ID_Poliza, ID_Cliente, ID_Seguro, Fecha_Inicio, Fecha_Vencimiento, Estado_Poliza)
VALUES (1, 1, 1, TO_DATE('2023-01-01','YYYY-MM-DD'), TO_DATE('2024-01-01','YYYY-MM-DD'), 'Activo');
INSERT INTO Polizas (ID_Poliza, ID_Cliente, ID_Seguro, Fecha_Inicio, Fecha_Vencimiento, Estado_Poliza)
VALUES (2, 2, 2, TO_DATE('2023-02-15','YYYY-MM-DD'), TO_DATE('2023-03-15','YYYY-MM-DD'), 'Activo');
INSERT INTO Polizas (ID_Poliza, ID_Cliente, ID_Seguro, Fecha_Inicio, Fecha_Vencimiento, Estado_Poliza)
VALUES (3, 3, 3, TO_DATE('2023-03-10','YYYY-MM-DD'), TO_DATE('2024-03-10','YYYY-MM-DD'), 'Activo');


/* Insertar Datos Tabla Pagos */
INSERT INTO Pagos (ID_Pago, ID_Poliza, Fecha_Pago, Total_Pago, Moneda)
VALUES (1, 1, TO_DATE('2023-01-05','YYYY-MM-DD'), 500, 'PEN');
INSERT INTO Pagos (ID_Pago, ID_Poliza, Fecha_Pago, Total_Pago, Moneda)
VALUES (2, 2, TO_DATE('2023-02-20','YYYY-MM-DD'), 200, 'USD');
INSERT INTO Pagos (ID_Pago, ID_Poliza, Fecha_Pago, Total_Pago, Moneda)
VALUES (3, 3, TO_DATE('2023-03-12','YYYY-MM-DD'), 300, 'PEN');

/* Insertar Datos Tabla Pagos Detalle*/
INSERT INTO DetallePagos (ID_Detalle_Pago, ID_Pago, Monto_Pago_Detalle, Metodo_Pago, Moneda)
VALUES (1, 1, 280, 'Tarjeta de Credito', 'PEN');
INSERT INTO DetallePagos (ID_Detalle_Pago, ID_Pago, Monto_Pago_Detalle, Metodo_Pago, Moneda)
VALUES (2, 1, 220, 'Transferencia Bancaria', 'PEN');
INSERT INTO DetallePagos (ID_Detalle_Pago, ID_Pago, Monto_Pago_Detalle, Metodo_Pago, Moneda)
VALUES (3, 2, 110, 'Tarjeta de Credito', 'USD');
INSERT INTO DetallePagos (ID_Detalle_Pago, ID_Pago, Monto_Pago_Detalle, Metodo_Pago, Moneda)
VALUES (4, 2, 90, 'Tarjeta de Debito', 'USD');
INSERT INTO DetallePagos (ID_Detalle_Pago, ID_Pago, Monto_Pago_Detalle, Metodo_Pago, Moneda)
VALUES (5, 3, 300, 'Tarjeta de Credito', 'PEN');

/* Verificar Datos */
SELECT * FROM DetallePagos;
SELECT * FROM Pagos;
SELECT * FROM Polizas;
SELECT * FROM Clientes;
SELECT * FROM Seguros;
SELECT * FROM Coberturas;