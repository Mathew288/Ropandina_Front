// Definición del objeto con la información de seguridad y confianza
interface Props {
    items: { titulo: string; contenido: string; color: string }[];
}
  
export const PORQUE_ELEGIRNOS: Props = {
    items: [
        {
            titulo: "Seguridad de Pago",
            contenido: "Garantizamos la seguridad de tus transacciones en línea. Utilizamos tecnología de encriptación SSL para proteger tus datos y ofrecemos métodos de pago seguros, incluyendo Visa, Mastercard, PayPal, entre otros.",
            color: "text-blue-400" // Azul claro
        },
        {
            titulo: "Garantía de Calidad",
            contenido: "Todos nuestros productos pasan por rigurosos controles de calidad para asegurar que cumplen con nuestros estándares antes de ser enviados. Si no estás satisfecho con tu compra, ofrecemos devoluciones gratuitas.",
            color: "text-yellow-400" // Amarillo claro
        },
        {
            titulo: "Envío Rápido y Seguro",
            contenido: "Trabajamos con empresas de envío de confianza para garantizar que tus productos lleguen a tiempo y en perfectas condiciones. Ofrecemos seguimiento en línea para que puedas rastrear tu pedido en todo momento.",
            color: "text-blue-400" // Azul pastel
        },
        {
            titulo: "Experiencia del Cliente",
            contenido: "Nos comprometemos a brindarte la mejor experiencia de compra posible. Nuestro equipo de atención al cliente está disponible para ayudarte con cualquier pregunta o inquietud que puedas tener.",
            color: "text-pink-400" // Rosa pastel
        },
        {
            titulo: "Garantía de Satisfacción",
            contenido: "Tu satisfacción es nuestra prioridad número uno. Si por alguna razón no estás completamente satisfecho con tu compra, contáctanos y haremos todo lo posible para resolver el problema.",
            color: "text-green-400" // Verde pastel
        },
        {
            titulo: "Sellos de Seguridad",
            contenido: "Contamos con los últimos estándares de seguridad en línea y mostramos sellos de seguridad reconocidos para que puedas comprar con total confianza.",
            color: "text-purple-400" // Morado pastel
        },
        {
            titulo: "Opiniones de Clientes",
            contenido: "Lee lo que dicen nuestros clientes sobre nosotros. Tenemos una alta calificación en satisfacción del cliente y estamos orgullosos de mantener altos estándares de servicio.",
            color: "text-gray-400" // Crema pastel
        }
    ]
};
