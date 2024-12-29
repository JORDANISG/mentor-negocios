import java.util.Scanner;

public class BrandingAssistant {

    // Respuestas predefinidas para preguntas sobre branding
    private static final String BRANDING = "El branding es el proceso de crear una identidad única para tu marca, incluyendo logotipo, colores, tipografía y mensaje clave.";
    private static final String NOMBRE = "Un buen nombre debe ser memorable, fácil de pronunciar y estar relacionado con tu mercado objetivo.";
    private static final String VALOR = "Tu propuesta de valor debe ser clara y resaltar lo que hace única a tu marca.";
    private static final String LOGOTIPO = "Un logotipo debe ser simple, reconocible y reflejar la personalidad de tu marca.";

    public static void main(String[] args) {
        // Crear un objeto Scanner para leer la entrada del usuario
        Scanner scanner = new Scanner(System.in);

        // Bienvenida e instrucciones
        System.out.println("¡Bienvenido al Asistente de Branding!");
        System.out.println("Puedes preguntarme sobre branding, nombre, valor o logotipo.");

        // Bucle para pedir entradas al usuario
        while (true) {
            // Solicitar al usuario una pregunta
            System.out.print("Escribe tu pregunta: ");
            String userInput = scanner.nextLine().toLowerCase();  // Leer y convertir a minúsculas

            // Salir del programa si el usuario escribe "salir"
            if (userInput.equals("salir")) {
                System.out.println("Gracias por usar el Asistente de Branding. ¡Hasta luego!");
                break;
            }

            // Procesar la entrada y mostrar la respuesta
            String respuesta = getResponse(userInput);
            System.out.println(respuesta);
        }

        // Cerrar el scanner al finalizar
        scanner.close();
    }

    // Función para obtener la respuesta según la entrada del usuario
    private static String getResponse(String userInput) {
        if (userInput.contains("branding")) {
            return BRANDING;
        } else if (userInput.contains("nombre")) {
            return NOMBRE;
        } else if (userInput.contains("valor")) {
            return VALOR;
        } else if (userInput.contains("logotipo")) {
            return LOGOTIPO;
        } else {
            return "Lo siento, no tengo una respuesta para esa pregunta. Intenta con otra.";
        }
    }
}
