# Fase 2 — Sesión 1: Introducción a Node.js

## Objetivos
- Entender qué es Node.js y para qué sirve
- Conocer npm y los comandos esenciales
- Comprender el archivo `package.json`
- Usar el sistema de módulos CommonJS (`require` / `module.exports`)
- Leer y escribir archivos con el módulo `fs`
- Construir rutas con `path`
- Obtener información del sistema con `os`
- Diferenciar `readFileSync` de `readFile`

## Teoría

### ¿Qué es Node.js?

Entorno de ejecución de JavaScript **fuera del navegador**. Permite usar JS para construir servidores, scripts y herramientas. Usa el motor V8 de Chrome.

### Comandos npm esenciales

```bash
npm init -y           → crea package.json con valores por defecto
npm install express   → instala un paquete
npm install           → instala todo lo que está en package.json
```

### package.json

Archivo de configuración del proyecto. Guarda nombre, versión y dependencias. Equivalente al `pom.xml` de Maven.

### Sistema de módulos CommonJS

```js
// Exportar desde un archivo
module.exports = { funcion1, funcion2 };

// Importar en otro archivo
const { funcion1, funcion2 } = require('./miArchivo');

// Importar módulo nativo o de npm
const fs = require('fs');
const express = require('express');
```

### Módulos nativos útiles

#### fs — File System

```js
const fs = require('fs');

fs.writeFileSync('archivo.txt', 'contenido');               // escribir (síncrono)
const data = fs.readFileSync('archivo.txt', 'utf8');        // leer (síncrono)
fs.readFile('archivo.txt', 'utf8', (err, data) => {});      // leer (asíncrono con callback)
```

#### path — Rutas

```js
const path = require('path');

path.join(__dirname, 'carpeta', 'archivo.txt');   // construir rutas
path.extname('datos.txt');                         // → '.txt'
path.basename('datos.txt', '.txt');                // → 'datos'
```

#### os — Sistema operativo

```js
const os = require('os');

os.platform();   // sistema operativo
os.totalmem();   // memoria total en bytes
os.cpus().length // cantidad de núcleos
```

### ⚠️ Error común — `return` dentro de `forEach`

```js
// ❌ El return es del callback, no de la función
function obtener() {
    datos.forEach((d) => {
        return d; // no sirve
    });
}

// ✅ Retornar el array directamente
function obtener() {
    return datos;
}
```

### Diferencia entre `readFileSync` y `readFile`

- `readFileSync` → **síncrono**, bloquea hasta terminar.
- `readFile` → **asíncrono** con callback, no bloquea.

```js
// Síncrono — bloquea
const data = fs.readFileSync('archivo.txt', 'utf8');

// Asíncrono — no bloquea
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    console.log(data);
});
```

## Buenas prácticas / Notas

- Usar `require` para importar módulos nativos y de npm.
- Usar `module.exports` para exponer funciones o variables.
- Preferir `readFile` (asíncrono) para archivos grandes o múltiples operaciones.
- `__dirname` da la ruta del archivo actual — usarlo con `path.join` para rutas portables.
- No usar `return` dentro de `forEach` esperando que retorne de la función contenedora.
