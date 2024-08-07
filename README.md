# Examen Electrodomestico

This is an Angular project for managing home appliances, including functionality to view and update the availability status of appliances.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Components and Services](#components-and-services)
- [Usage Examples](#usage-examples)
- [Contribution](#contribution)
- [License](#license)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Anyel-ec/FrontEnd-Angular18-ConsumerRESTAPI
    cd FrontEnd-Angular18-ConsumerRESTAPI
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the application:

    ```sh
    npm start
    ```

## Configuration

The project expects an API to be running at `http://127.0.0.1:3000/electrodomestico`. Ensure that the backend is properly configured and running before starting the Angular application.

## Project Structure

```
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── search-code
│   │   │   │   ├── search-code.component.ts
│   │   │   │   ├── search-code.component.html
│   │   │   │   ├── search-code.component.scss
│   │   │   ├── electrodomestico-disponible
│   │   │   │   ├── electrodomestico-disponible.component.ts
│   │   │   │   ├── electrodomestico-disponible.component.html
│   │   │   │   ├── electrodomestico-disponible.component.scss
│   │   │   ├── electrodomestico-poco-disponible
│   │   │   │   ├── electrodomestico-poco-disponible.component.ts
│   │   │   │   ├── electrodomestico-poco-disponible.component.html
│   │   │   │   ├── electrodomestico-poco-disponible.component.scss
│   │   │   ├── electrodomestico-no-disponible
│   │   │   │   ├── electrodomestico-no-disponible.component.ts
│   │   │   │   ├── electrodomestico-no-disponible.component.html
│   │   │   │   ├── electrodomestico-no-disponible.component.scss
│   │   │   ├── electrodomestico-edit
│   │   │   │   ├── electrodomestico-edit.component.ts
│   │   │   │   ├── electrodomestico-edit.component.html
│   │   │   │   ├── electrodomestico-edit.component.scss
│   │   ├── services
│   │   │   ├── electrodomestico.service.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
├── package.json
└── README.md
```

## Scripts

- `ng`: Run Angular CLI commands.
- `start`: Start the Angular development server.
- `build`: Build the Angular project.
- `watch`: Build the project and watch for changes.
- `test`: Run tests.
- `serve:ssr:examen_electrodomestico`: Serve the project with server-side rendering.

## Components and Services

### `ElectrodomesticoService`

Handles HTTP requests to the backend API for fetching and updating appliance data.

#### Methods

- `getElectrodomestico(id: String): Observable<ElectrodomesticoResponse>`
- `updateElectrodomestico(id: number, cantidad: number): Observable<any>`

### `SearchCodeComponent`

Allows users to search for an appliance by code and view its availability status. Includes functionality to open and close the edit form.

#### Methods

- `buscarElectrodomestico(codigo: string): void`
- `openEditForm(item: any): void`
- `closeEditForm(): void`

### `ElectrodomesticoDisponibleComponent`

Displays information for available appliances.

### `ElectrodomesticoEditComponent`

Provides a form to update the quantity of an appliance. Uses `sweetalert2` for notifications.

#### Methods

- `updateElectrodomestico(): void`

## Usage Examples

### Searching for an Appliance

```typescript
buscarElectrodomestico(codigo: string): void {
  this.electrodomesticoService.getElectrodomestico(codigo).subscribe(
    (response) => {
      this.status = response.status;
      if (response.status === 'disponible') {
        this.electrodomestico = response.data;
      } else {
        this.message = response.message ?? '';
        this.electrodomestico = response.data;
      }
    },
    (error) => {
      console.error('Error fetching data:', error);
      this.status = '';
      this.message = 'Error fetching data';
      this.electrodomestico = null;
    }
  );
}
```

### Updating an Appliance

```typescript
updateElectrodomestico(): void {
  this.electrodomesticoService.updateElectrodomestico(this.data.id_electrodomestico, this.cantidad).subscribe(
    () => {
      Swal.fire({
        icon: 'success',
        title: 'Actualizado',
        text: 'Electrodoméstico actualizado correctamente'
      });
      this.updated.emit();
    },
    (error) => {
      console.error('Error updating data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error actualizando el electrodoméstico'
      });
    }
  );
}
```

## Contribution

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.
