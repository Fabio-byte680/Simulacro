// =============================================
// BANCO DE PREGUNTAS ORGANIZADO
// =============================================
const bancoPreguntas = {
    "RAZONAMIENTO MATEMATICO": {
        "Identificación de patrones": [
            // ===== PREGUNTAS ACTUALES (las que ya tenés) =====
            {
                pregunta: "Observa la siguiente serie numérica: 2, 5, 9, 14, 20, ¿cuál es el número que sigue?",
                opciones: ["25", "26", "27", "28"],
                respuestaCorrecta: 2,
                explicacion: "Para hallar el patrón, calculamos las diferencias entre términos consecutivos: 5‑2 = 3, 9‑5 = 4, 14‑9 = 5, 20‑14 = 6. Las diferencias aumentan en una unidad cada paso (3, 4, 5, 6). Por lo tanto, la siguiente diferencia debe ser 7. Sumando 7 al último término de la serie (20) obtenemos 20 + 7 = 27."
            },
            {
                pregunta: "Observa la siguiente serie de números: 2, 4, 8, 16, __. ¿Cuál número completa correctamente la secuencia?",
                opciones: ["24", "28", "32", "36"],
                respuestaCorrecta: 2,
                explicacion: "Cada número de la serie se obtiene multiplicando el anterior por 2: 2×2=4, 4×2=8, 8×2=16. Por lo tanto, el siguiente término es 16×2=32."
            },
            {
                pregunta: "En una biblioteca escolar, los libros de la serie 'Descubriendo la Ciencia' se organizan siguiendo una regla: cada nuevo libro tiene 15 páginas más que el anterior. Si el primer libro tiene 8 páginas, ¿cuántas páginas tendrá el quinto libro de la serie?",
                opciones: ["53", "58", "63", "68"],
                respuestaCorrecta: 3,
                explicacion: "La secuencia se forma sumando 15 a cada término. Partiendo de 8 páginas: segundo libro = 8 + 15 = 23, tercer libro = 23 + 15 = 38, cuarto libro = 38 + 15 = 53, quinto libro = 53 + 15 = 68. Por lo tanto, el quinto libro tendrá 68 páginas."
            },
            {
                pregunta: "En la siguiente serie numérica: 2, 6, 12, 20, … ¿Cuál es el número que sigue?",
                opciones: ["24", "28", "30", "32"],
                respuestaCorrecta: 2,
                explicacion: "Observemos la relación entre cada término y su posición: 1×2=2, 2×3=6, 3×4=12, 4×5=20. La fórmula general es: a_n = n × (n + 1). Para n=5: 5×6=30."
            },
            {
                pregunta: "En una escuela se dispone una fila de sillas para los estudiantes en la siguiente forma: la primera fila tiene 2 sillas, la segunda fila tiene 5, la tercera fila tiene 10 y la cuarta fila tiene 17. ¿Cuántas sillas debe contener la quinta fila para que el número de sillas continúe la misma lógica?",
                opciones: ["24", "26", "28", "30"],
                respuestaCorrecta: 1,
                explicacion: "Los números de sillas forman la secuencia 2, 5, 10, 17. Las diferencias son 3, 5, 7 (aumentan en 2). La siguiente diferencia será 9: 17 + 9 = 26."
            },
            {
                pregunta: "En una serie numérica aparecen los siguientes valores: 2, 5, 9, 14, 20. Cada término se obtiene sumando al anterior un número que aumenta en una unidad respecto al incremento anterior. ¿Cuál es el próximo número de la serie?",
                opciones: ["25", "26", "27", "28"],
                respuestaCorrecta: 2,
                explicacion: "Los incrementos: 5-2=3, 9-5=4, 14-9=5, 20-14=6. Forman la sucesión 3,4,5,6. El próximo incremento es 7: 20+7=27."
            },
            {
                pregunta: "En la siguiente serie de números se observa una regla que permite obtener cada término a partir del anterior: 2, 5, 10, 17, 26, … ¿Cuál es el número que sigue en la serie?",
                opciones: ["35", "36", "37", "38"],
                respuestaCorrecta: 2,
                explicacion: "Diferencias: 5-2=3, 10-5=5, 17-10=7, 26-17=9. Forman números impares que aumentan en 2. Siguiente diferencia: 11. 26+11=37."
            },
            {
                pregunta: "Observa la siguiente serie numérica: 3, 8, 15, 24, 35, … ¿Cuál es el número que sigue en la secuencia?",
                opciones: ["44", "46", "48", "50"],
                respuestaCorrecta: 2,
                explicacion: "Diferencias: 8-3=5, 15-8=7, 24-15=9, 35-24=11. Sucesión de impares que aumenta en 2. Siguiente: 13. 35+13=48."
            },
            {
                pregunta: "En una serie de fichas numeradas que sigue el patrón de sumar al número anterior la sucesiva cantidad de unidades (es decir, el primer término es 2 y al término n‑ésimo se le suma n), la sucesión es: 2, 6, 12, 20, 30, … ¿Cuál es el siguiente número de la serie?",
                opciones: ["40", "42", "44", "46"],
                respuestaCorrecta: 1,
                explicacion: "Los términos son n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Para n=6: 6×7=42."
            },
            {
                pregunta: "Observa las dos series siguientes: Serie numérica: 2, 5, 8, 11, … Serie de letras: A, C, E, G, … ¿Cuál es el siguiente término de cada serie, respectivamente?",
                opciones: ["14 y H", "14 y I", "15 y H", "15 y I"],
                respuestaCorrecta: 1,
                explicacion: "Serie numérica: suma 3 cada vez → 11+3=14. Serie de letras: avanza 2 posiciones en el alfabeto → G (7) +2 = I (9)."
            },

            // ===== PREGUNTAS NUEVAS (del 33 al 92) =====
            // Pregunta 36
            {
                pregunta: "En una serie numérica aparecen los siguientes valores: 2, 5, 9, 14, 20. Cada término se obtiene sumando al anterior un número que aumenta en una unidad respecto al incremento anterior. ¿Cuál es el próximo número de la serie?",
                opciones: ["25", "26", "27", "28"],
                respuestaCorrecta: 2,
                explicacion: "Los incrementos forman la sucesión 3, 4, 5, 6. El próximo incremento es 7, por lo que 20 + 7 = 27."
            },
            // Pregunta 37
            {
                pregunta: "En la siguiente serie de números se observa una regla que permite obtener cada término a partir del anterior: 2, 5, 10, 17, 26, … ¿Cuál es el número que sigue en la serie?",
                opciones: ["35", "36", "37", "38"],
                respuestaCorrecta: 2,
                explicacion: "Las diferencias son 3, 5, 7, 9 (números impares que aumentan en 2). La siguiente diferencia es 11: 26 + 11 = 37."
            },
            // Pregunta 38
            {
                pregunta: "Observa la siguiente serie numérica: 3, 8, 15, 24, 35, … ¿Cuál es el número que sigue en la secuencia?",
                opciones: ["44", "46", "48", "50"],
                respuestaCorrecta: 2,
                explicacion: "Las diferencias son 5, 7, 9, 11 (impares que aumentan en 2). La siguiente diferencia es 13: 35 + 13 = 48."
            },
            // Pregunta 39
            {
                pregunta: "En una serie de fichas numeradas que sigue el patrón de sumar al número anterior la sucesiva cantidad de unidades (es decir, el primer término es 2 y al término n‑ésimo se le suma n), la sucesión es: 2, 6, 12, 20, 30, … ¿Cuál es el siguiente número de la serie?",
                opciones: ["40", "42", "44", "46"],
                respuestaCorrecta: 1,
                explicacion: "Cada término es n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Para n=6: 6×7=42."
            },
            // Pregunta 40
            {
                pregunta: "Observa las dos series siguientes: Serie numérica: 2, 5, 8, 11, … Serie de letras: A, C, E, G, … ¿Cuál es el siguiente término de cada serie, respectivamente?",
                opciones: ["14 y H", "14 y I", "15 y H", "15 y I"],
                respuestaCorrecta: 1,
                explicacion: "Serie numérica: suma 3 → 11+3=14. Serie de letras: avanza 2 posiciones → G→I (saltando H)."
            },
            // Pregunta 41
            {
                pregunta: "Observa la siguiente sucesión de números: 3, 8, 15, 24, 35, … ¿Cuál es el número que sigue en la serie?",
                opciones: ["44", "46", "48", "50"],
                respuestaCorrecta: 2,
                explicacion: "Diferencias: 5, 7, 9, 11 (aumentan en 2). Siguiente diferencia: 13. 35+13=48. Otra forma: a_n = n×(n+2). Para n=6: 6×8=48."
            },
            // Pregunta 42
            {
                pregunta: "En la coordinación pedagógica de la escuela, se programó una serie de jornadas de lectura en las que a cada clase se le entregó la siguiente cantidad de libros, en la siguiente orden: 5, 9, 13, 17. ¿Cuántos libros se entregarán a la siguiente clase si la serie continúa con el mismo patrón?",
                opciones: ["19", "20", "21", "22"],
                respuestaCorrecta: 2,
                explicacion: "Cada término aumenta en 4: 5+4=9, 9+4=13, 13+4=17. Siguiente: 17+4=21."
            },
            // Pregunta 43
            {
                pregunta: "Observa la siguiente secuencia de figuras: Un círculo con un punto rojo. Un círculo con dos puntos azules. Un círculo con tres puntos rojos. Un círculo con cuatro puntos azules. ¿Cuál será la descripción de la quinta figura de la serie?",
                opciones: ["Un círculo con cinco puntos rojos", "Un círculo con cinco puntos azules", "Un cuadrado con cinco puntos rojos", "Un cuadrado con cinco puntos azules"],
                respuestaCorrecta: 0,
                explicacion: "El número de puntos aumenta en 1 cada vez (1,2,3,4,5). El color alterna: rojo, azul, rojo, azul, rojo. La quinta figura: 5 puntos rojos."
            },
            // Pregunta 44
            {
                pregunta: "Observa la siguiente sucesión de números: 3, 8, 15, 24, … ¿Cuál es el número que continúa la serie?",
                opciones: ["33", "35", "37", "39"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 5, 7, 9 (aumentan en 2). Siguiente diferencia: 11. 24+11=35."
            },
            // Pregunta 45
            {
                pregunta: "Una estudiante registra la cantidad de páginas que lee cada día durante una semana y la secuencia obtenida es: 2, 5, 10, 17, 26, … ¿Cuál será el número de páginas que leerá el sexto día?",
                opciones: ["35", "37", "39", "41"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 3, 5, 7, 9 (impares que aumentan en 2). Siguiente diferencia: 11. 26+11=37."
            },
            // Pregunta 46
            {
                pregunta: "En una serie de fichas, la primera muestra un círculo rojo, la segunda un cuadrado rojo, la tercera un cuadrado azul y la cuarta un triángulo azul. Según el patrón observado, ¿qué figura y color aparecerá en la quinta ficha?",
                opciones: ["Triángulo rojo", "Triángulo azul", "Círculo rojo", "Círculo azul"],
                respuestaCorrecta: 0,
                explicacion: "Patrón: cambia forma manteniendo color, luego cambia color manteniendo forma, alternadamente. Cuarta: triángulo azul. Quinta: mantiene forma (triángulo), cambia color a rojo."
            },
            // Pregunta 47
            {
                pregunta: "Observa las dos filas de fichas coloreadas que se presentan a continuación: Fila 1: rojo, azul, rojo, azul, rojo, azul… Fila 2: rojo, rojo, azul, azul, rojo, rojo, azul, azul… ¿Cuál de las siguientes afirmaciones describe correctamente la relación entre los patrones de colores de ambas filas?",
                opciones: ["Ambas filas alternan colores de la misma manera", "La Fila 2 repite cada color dos veces antes de cambiar", "La Fila 1 tiene un patrón más complejo que la Fila 2", "No hay relación entre ambas filas"],
                respuestaCorrecta: 1,
                explicacion: "Fila 1: alterna rojo/azul individual. Fila 2: cada color se repite 2 veces antes de cambiar."
            },
            // Pregunta 48
            {
                pregunta: "En la lista de números presentada a continuación, 3, 5, 12, 14, 27, 29, …, ¿cuál es el número que debería aparecer a continuación?",
                opciones: ["42", "44", "48", "50"],
                respuestaCorrecta: 2,
                explicacion: "Posiciones impares: 3,12,27... diferencias 9 y 15 (aumentan en 6). Siguiente diferencia: 21. 27+21=48."
            },
            // Pregunta 49
            {
                pregunta: "En una escuela, la cantidad de estudiantes que se inscriben en el programa de lectura cada año ha sido: 3, 7, 15, 31, … ¿Cuál es el número que sigue en la serie?",
                opciones: ["47", "55", "63", "71"],
                respuestaCorrecta: 2,
                explicacion: "Cada término = anterior×2 + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31. Siguiente: 31×2+1=63."
            },
            // Pregunta 50
            {
                pregunta: "En una escuela rural se registró el número de estudiantes que se graduaron en los últimos años consecutivos: 45, 54, 63, ?, 81. ¿Cuál es el número que completa la secuencia?",
                opciones: ["68", "70", "72", "74"],
                respuestaCorrecta: 2,
                explicacion: "Aumenta en 9 cada año: 45+9=54, 54+9=63, 63+9=72, 72+9=81."
            },
            // Pregunta 51
            {
                pregunta: "En una fila de fichas, la primera muestra 2 puntos, la segunda 5 puntos, la tercera 12 puntos y la cuarta 27 puntos. ¿Cuántos puntos tendrá la quinta ficha?",
                opciones: ["48", "52", "58", "62"],
                respuestaCorrecta: 2,
                explicacion: "Diferencias: 3, 7, 15. Cada diferencia = anterior×2 + 1. Siguiente diferencia: 15×2+1=31. 27+31=58."
            },
            // Pregunta 52
            {
                pregunta: "Observa la siguiente sucesión de números: 2, 6, 12, 20, __. ¿Cuál es el número que debe ocupar la posición del espacio en blanco?",
                opciones: ["24", "28", "30", "32"],
                respuestaCorrecta: 2,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20. Siguiente: 5×6=30."
            },
            // Pregunta 53
            {
                pregunta: "En una hoja de trabajo se presentan dos filas de números. La fila A muestra: 2, 4, 8, 16, … y la fila B muestra: 3, 6, 12, 24, …. ¿Cuál de las siguientes afirmaciones describe correctamente la relación entre los valores de la fila B y los de la fila A?",
                opciones: ["La fila B es la fila A multiplicada por 1.5", "La fila B es la fila A más 1", "La fila B es el doble de la fila A", "No hay relación clara"],
                respuestaCorrecta: 0,
                explicacion: "Cada número de B es 1.5 veces el de A: 3/2=1.5, 6/4=1.5, 12/8=1.5, 24/16=1.5."
            },
            // Pregunta 54
            {
                pregunta: "En una serie numérica cada término se obtiene multiplicando dos números consecutivos. Si la serie comienza con 2, 6, 12, 20, 30, ¿cuál es el siguiente número?",
                opciones: ["40", "42", "44", "46"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Siguiente: 6×7=42."
            },
            // Pregunta 55
            {
                pregunta: "En una exposición de arte digital, una serie de figuras aparecen en la pantalla siguiendo una regla oculta. Las áreas (en unidades cuadradas) de las figuras mostradas son: 3, 8, 15, 24. ¿Cuál será el área de la siguiente figura mostrada?",
                opciones: ["33", "35", "37", "39"],
                respuestaCorrecta: 1,
                explicacion: "n² + 2n: 1²+2=3, 2²+4=8, 3²+6=15, 4²+8=24. Siguiente: 5²+10=25+10=35."
            },
            // Pregunta 56
            {
                pregunta: "En una serie de figuras la primera fila muestra: triángulo, cuadrado y círculo. La segunda fila muestra las mismas figuras, pero todas coloreadas de rojo: triángulo rojo, cuadrado rojo y círculo rojo. Si la regla del problema es que cada figura de la segunda fila es la misma que la de la primera fila, solo que con el color rojo, ¿cuál es la figura que corresponde a la tercera posición de la segunda fila?",
                opciones: ["Triángulo rojo", "Cuadrado rojo", "Círculo rojo", "No se puede determinar"],
                respuestaCorrecta: 2,
                explicacion: "La tercera figura de la primera fila es círculo, por lo tanto la tercera de la segunda es círculo rojo."
            },
            // Pregunta 57
            {
                pregunta: "Observa la siguiente serie de números: 4, 14, 34, 74, ¿Cuál es el siguiente número que completa la secuencia?",
                opciones: ["144", "154", "164", "174"],
                respuestaCorrecta: 1,
                explicacion: "Cada término = anterior×2 + 6: 4×2+6=14, 14×2+6=34, 34×2+6=74. Siguiente: 74×2+6=148+6=154."
            },
            // Pregunta 58
            {
                pregunta: "En una escuela se organizan grupos de estudiantes para una actividad extracurricular siguiendo la siguiente sucesión de números que indica la cantidad de estudiantes en cada grupo: 5, 9, 15, 23, … ¿Cuántos estudiantes integrarán el quinto grupo?",
                opciones: ["31", "33", "35", "37"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 4, 6, 8 (aumentan en 2). Siguiente diferencia: 10. 23+10=33."
            },
            // Pregunta 59
            {
                pregunta: "En una escuela primaria se está diseñando el mosaico del patio. La primera fila sigue el orden de colores: rojo, azul, rojo, azul, … (alternando). En la segunda fila, cada baldosa lleva una cantidad de puntos que aumenta en dos unidades desde la anterior: 2, 4, 6, 8, …. Al comparar ambas filas, ¿cuál de las siguientes afirmaciones es correcta?",
                opciones: ["Ambas filas tienen patrones que se repiten", "Solo la primera fila tiene un patrón que se repite", "Solo la segunda fila tiene un patrón que se repite", "Ninguna tiene un patrón claro"],
                respuestaCorrecta: 1,
                explicacion: "Primera fila: patrón periódico (rojo/azul). Segunda fila: progresión aritmética que nunca se repite (2,4,6,8... siempre aumenta)."
            },
            // Pregunta 60
            {
                pregunta: "En una feria, los puestos están organizados en una fila siguiendo una regla de incremento en la cantidad de manzanas que venden: el primer puesto vende 2 manzanas, el segundo 6, el tercero 12 y el cuarto 20. ¿Cuántas manzanas venderá el sexto puesto?",
                opciones: ["30", "36", "42", "48"],
                respuestaCorrecta: 2,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20. Para n=6: 6×7=42."
            },
            // Pregunta 61
            {
                pregunta: "En una comunidad se decide plantar árboles de forma anual siguiendo la siguiente regla: el primer año se plantan 1 árbol, y cada año posterior se plantan un árbol más que la diferencia de árboles plantados respecto al año anterior. La cantidad de árboles plantados en los primeros seis años ha sido: 1, 2, 4, 7, 11, 16. ¿Cuántos árboles se plantarían en el séptimo año?",
                opciones: ["20", "22", "24", "26"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 1, 2, 3, 4, 5. Siguiente diferencia: 6. 16+6=22."
            },
            // Pregunta 62
            {
                pregunta: "En una fila de bloques, la altura de cada bloque duplica la del anterior (1 cm, 2 cm, 4 cm, 8 cm, …) y el color se alterna entre rojo y azul, comenzando con rojo. ¿Cuál será la altura y el color del siguiente bloque para que continúe con ambos patrones?",
                opciones: ["16 cm rojo", "16 cm azul", "12 cm rojo", "12 cm azul"],
                respuestaCorrecta: 0,
                explicacion: "Altura: 8×2=16 cm. Color: secuencia rojo, azul, rojo, azul... último fue azul, siguiente es rojo."
            },
            // Pregunta 63
            {
                pregunta: "En la planificación de un proyecto de aula, el docente anota los valores de asistencia diaria de los estudiantes en la siguiente serie: 5, 9, 17, 33, … ¿Cuál es el número que sigue en la secuencia?",
                opciones: ["49", "57", "65", "73"],
                respuestaCorrecta: 2,
                explicacion: "Cada término = anterior×2 - 1: 5×2-1=9, 9×2-1=17, 17×2-1=33. Siguiente: 33×2-1=66-1=65."
            },
            // Pregunta 64
            {
                pregunta: "En una escuela, el profesor asigna ejercicios de práctica extra cada semana siguiendo el siguiente orden: en la semana 1 asigna 2 ejercicios, en la semana 2 asigna 6 ejercicios, en la semana 3 asigna 12 ejercicios y en la semana 4 asigna 20 ejercicios. ¿Cuántos ejercicios le tocará asignar al estudiante en la semana 5?",
                opciones: ["28", "30", "32", "34"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20. Semana 5: 5×6=30."
            },
            // Pregunta 65
            {
                pregunta: "En el aula de una escuela, el profesor coloca los libros en las mesas siguiendo una sucesión numérica. La primera mesa tiene 2 libros, la segunda 5, la tercera 10 y la cuarta 17. ¿Cuántos libros debe colocar en la quinta mesa para mantener el mismo patrón?",
                opciones: ["24", "26", "28", "30"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 3, 5, 7 (impares que aumentan en 2). Siguiente diferencia: 9. 17+9=26. Otra forma: n²+1: 5²+1=26."
            },
            // Pregunta 66
            {
                pregunta: "En la planificación de actividades de un club de lectura, el número de página donde inicia cada capítulo se determina mediante la regla: el capítulo k comienza en la página k × (k + 1). Si el capítulo 1 comienza en la página 2, el capítulo 2 en la página 6, el capítulo 3 en la página 12 y el capítulo 4 en la página 20, ¿en qué página iniciará el capítulo 6?",
                opciones: ["30", "36", "42", "48"],
                respuestaCorrecta: 2,
                explicacion: "k×(k+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30, 6×7=42."
            },
            // Pregunta 67
            {
                pregunta: "En una tabla de notas de una clase, el profesor observa que la puntuación total de los estudiantes sigue la siguiente secuencia: 4, 10, 22, 46, __. ¿Cuál es el número que completa la serie?",
                opciones: ["82", "88", "94", "100"],
                respuestaCorrecta: 2,
                explicacion: "Cada término = anterior×2 + 2: 4×2+2=10, 10×2+2=22, 22×2+2=46. Siguiente: 46×2+2=92+2=94."
            },
            // Pregunta 68
            {
                pregunta: "En una serie de números cada término se obtiene sumando al número anterior la cantidad de unidades que incrementa su posición (es decir, al primer término se le añade 1, al segundo 2, al tercero 3, etc.). La serie comienza así: 2, 6, 12, 20, … ¿Cuál es el siguiente número de la secuencia?",
                opciones: ["28", "30", "32", "34"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 4, 6, 8 (aumentan en 2). Siguiente diferencia: 10. 20+10=30."
            },
            // Pregunta 69
            {
                pregunta: "En la siguiente serie numérica cada término se obtiene sumando al anterior un número que incrementa en una unidad cada vez: 1, 2, 4, 7, ¿Cuál es el número que sigue?",
                opciones: ["10", "11", "12", "13"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 1, 2, 3. Siguiente diferencia: 4. 7+4=11."
            },
            // Pregunta 70
            {
                pregunta: "Observa la siguiente serie numérica: 2, 5, 10, 17, 26, __. ¿Cuál número completa correctamente la secuencia?",
                opciones: ["34", "35", "36", "37"],
                respuestaCorrecta: 3,
                explicacion: "Diferencias: 3, 5, 7, 9 (impares). Siguiente diferencia: 11. 26+11=37."
            },
            // Pregunta 71
            {
                pregunta: "Considere las dos series siguientes: Serie A: 3, 6, 12, 24, … Serie B: 2, 5, 10, 17, … ¿Cuál de las siguientes afirmaciones describe correctamente la forma en que se generan los términos de ambas series?",
                opciones: ["La Serie A se multiplica por 2, la Serie B suma números impares", "Ambas series suman números pares", "La Serie A suma 3, la Serie B suma 3, 5, 7...", "No hay patrón claro"],
                respuestaCorrecta: 0,
                explicacion: "Serie A: ×2 (3×2=6, 6×2=12...). Serie B: suma impares crecientes (2+3=5, 5+5=10, 10+7=17...)."
            },
            // Pregunta 72
            {
                pregunta: "Observa las siguientes dos series numéricas: Serie I: 5, 9, 13, 17, 21, … Serie II: 2, 6, 12, 20, 30, … ¿Cuál de las dos series sigue un patrón de suma constante entre términos?",
                opciones: ["Solo la Serie I", "Solo la Serie II", "Ambas series", "Ninguna de las dos"],
                respuestaCorrecta: 0,
                explicacion: "Serie I: suma constante de 4. Serie II: diferencias aumentan (4, 6, 8, 10), no es constante."
            },
            // Pregunta 73
            {
                pregunta: "En el patio de la escuela, el docente está colocando filas de bancos siguiendo un patrón: la primera fila tiene 2 bancos, la segunda fila 5 bancos, la tercera fila 10 bancos y la cuarta fila 17 bancos. ¿Cuántos bancos tendrá la quinta fila si el patrón continúa de la misma manera?",
                opciones: ["24", "26", "28", "30"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 3, 5, 7 (aumentan en 2). Siguiente diferencia: 9. 17+9=26."
            },
            // Pregunta 74
            {
                pregunta: "En un estudio sobre la cantidad de aves que anidan en un reservorio cada año, se registraron los siguientes valores: 2, 12, 30, 56, 90. Si la tendencia observada continúa, ¿cuál será el número de aves que anidarán en el sexto año?",
                opciones: ["110", "120", "130", "132"],
                respuestaCorrecta: 3,
                explicacion: "Fórmula: a_n = 4n² - 2n. Para n=6: 4×36 - 12 = 144 - 12 = 132."
            },
            // Pregunta 75
            {
                pregunta: "Observa la siguiente sucesión de números naturales: 2, 6, 12, 20, 30, … ¿Cuál es el siguiente término de la serie?",
                opciones: ["40", "42", "44", "46"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Siguiente: 6×7=42."
            },
            // Pregunta 76
            {
                pregunta: "En una tabla de registro la cantidad de estudiantes que participan en el proyecto de lectura sigue la serie: 2, 5, 9, 14, 20, … ¿Cuál es el número que corresponde al sexto término?",
                opciones: ["25", "27", "29", "31"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 3, 4, 5, 6 (aumentan en 1). Siguiente diferencia: 7. 20+7=27."
            },
            // Pregunta 77
            {
                pregunta: "En una serie numérica, cada número se obtiene multiplicando el anterior por 2 y sumándole 1. Si la secuencia comienza con 3, 7, 15, 31, ¿cuál es el siguiente número que sigue?",
                opciones: ["47", "55", "63", "71"],
                respuestaCorrecta: 2,
                explicacion: "Cada término = anterior×2 + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31. Siguiente: 31×2+1=63."
            },
            // Pregunta 78
            {
                pregunta: "En una serie de valores que representa la cantidad de libros que un estudiante lee cada mes, los números son: 3, 8, 15, 24, 35. ¿Cuál será el número de libros que leerá en el sexto mes, si la serie sigue el mismo patrón?",
                opciones: ["46", "48", "50", "52"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+2): 1×3=3, 2×4=8, 3×5=15, 4×6=24, 5×7=35. Sexto mes (n=6): 6×8=48."
            },
            // Pregunta 79
            {
                pregunta: "En una fila de sillas del aula, la altura de cada una sigue una regla creciente: la primera mide 40 cm, la segunda 45 cm, la tercera 55 cm y la cuarta 70 cm. ¿Cuál será la altura de la quinta silla?",
                opciones: ["85", "90", "95", "100"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 5, 10, 15 (aumentan en 5). Siguiente diferencia: 20. 70+20=90."
            },
            // Pregunta 80
            {
                pregunta: "En una tabla de rendimiento de una escuela, se observa que el número de estudiantes que aprobaron el examen de matemática en los últimos cinco años sigue la serie: 2, 6, 12, 20, 30. ¿Cuál será el número esperado de aprobados para el próximo año si la tendencia continúa?",
                opciones: ["40", "42", "44", "46"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20, 5×6=30. Próximo (n=6): 6×7=42."
            },
            // Pregunta 81
            {
                pregunta: "En una clase, el maestro dispone los asientos en filas de forma que la primera fila tiene 2 estudiantes, la segunda fila 6 estudiantes, la tercera fila 12 estudiantes y la cuarta fila 20 estudiantes. Siguiendo el mismo criterio, ¿cuántos estudiantes se sentarán en la quinta fila?",
                opciones: ["28", "30", "32", "34"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20. Quinta fila (n=5): 5×6=30."
            },
            // Pregunta 82
            {
                pregunta: "En el programa de mejoramiento de la infraestructura de los colegios rurales, se decide instalar un número de aulas nuevas cada año siguiendo la siguiente secuencia: en el primer año se construyeron 5 aulas, en el segundo año 9 aulas, en el tercer año 15 aulas y en el cuarto año 23 aulas. Según este patrón, ¿cuántas aulas se deberían construir en el quinto año?",
                opciones: ["31", "33", "35", "37"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 4, 6, 8 (aumentan en 2). Siguiente diferencia: 10. 23+10=33."
            },
            // Pregunta 83
            {
                pregunta: "En una fila de fichas se repite el siguiente patrón de símbolos: cuadrado, círculo, triángulo, cuadrado, círculo, triángulo, … Si la secuencia continuye de la misma forma, ¿qué símbolo ocupará la posición número 10?",
                opciones: ["Cuadrado", "Círculo", "Triángulo", "No se puede determinar"],
                respuestaCorrecta: 0,
                explicacion: "Patrón cíclico de 3 símbolos. 10 ÷ 3 = 3 ciclos completos (9 posiciones) y residuo 1 → primer símbolo del ciclo: Cuadrado."
            },
            // Pregunta 84
            {
                pregunta: "En la siguiente serie de números: 2, 4, 7, 11, 16, …, ¿cuál es el número que continúa la secuencia?",
                opciones: ["20", "22", "24", "26"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 2, 3, 4, 5 (aumentan en 1). Siguiente diferencia: 6. 16+6=22."
            },
            // Pregunta 85
            {
                pregunta: "En una serie de actividades de aula, el docente dispone bloques numerados siguiendo el patrón: 2, 6, 12, 20, __. ¿Cuál es el número que continúa la secuencia?",
                opciones: ["28", "30", "32", "34"],
                respuestaCorrecta: 1,
                explicacion: "n×(n+1): 1×2=2, 2×3=6, 3×4=12, 4×5=20. Siguiente: 5×6=30."
            },
            // Pregunta 86
            {
                pregunta: "En una clase de matemática, el profesor escribe la siguiente serie de números: 2, 5, 10, 17, 26, … ¿Cuál es el número que sigue en la serie?",
                opciones: ["34", "35", "36", "37"],
                respuestaCorrecta: 3,
                explicacion: "Diferencias: 3, 5, 7, 9 (impares). Siguiente: 11. 26+11=37. Otra forma: n²+1, n=6: 36+1=37."
            },
            // Pregunta 87
            {
                pregunta: "Observa la siguiente sucesión de números: 3, 8, 15, 24, 35, ___. ¿Cuál es el número que continúa la serie?",
                opciones: ["44", "46", "48", "50"],
                respuestaCorrecta: 2,
                explicacion: "Diferencias: 5, 7, 9, 11 (aumentan en 2). Siguiente: 13. 35+13=48."
            },
            // Pregunta 88
            {
                pregunta: "En una serie de bloques de madera se colocan de forma creciente la siguiente cantidad de piezas: 2, 5, 10, 17, … ¿Cuál es la cantidad de piezas que se colocará en el siguiente bloque?",
                opciones: ["24", "26", "28", "30"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 3, 5, 7 (impares que aumentan en 2). Siguiente: 9. 17+9=26."
            },
            // Pregunta 89
            {
                pregunta: "Un profesor de matemática registra la cantidad de problemas que su clase resuelve en cada sesión de práctica. Los resultados de las primeras seis sesiones fueron: 5, 7, 10, 15, 23, 36. Si la tendencia observada continúa, ¿cuántos problemas se espera que se resuelvan en la séptima sesión?",
                opciones: ["51", "53", "55", "57"],
                respuestaCorrecta: 3,
                explicacion: "Diferencias: 2, 3, 5, 8, 13 (Fibonacci). Siguiente diferencia: 21 (8+13). 36+21=57."
            },
            // Pregunta 90
            {
                pregunta: "Observa la siguiente serie de números: 3, 7, 15, 31, __. ¿Cuál es el número que continúa la secuencia?",
                opciones: ["47", "55", "63", "71"],
                respuestaCorrecta: 2,
                explicacion: "Cada término = anterior×2 + 1: 3×2+1=7, 7×2+1=15, 15×2+1=31. Siguiente: 31×2+1=63."
            },
            // Pregunta 91
            {
                pregunta: "Observa la siguiente sucesión de letras del alfabeto: A, C, F, J, O, __. ¿Cuál es la letra que completa la serie?",
                opciones: ["T", "U", "V", "X"],
                respuestaCorrecta: 1,
                explicacion: "Posiciones: A=1, C=3 (+2), F=6 (+3), J=10 (+4), O=15 (+5). Siguiente incremento: +6. 15+6=21 → U."
            },
            // Pregunta 92
            {
                pregunta: "Observa la siguiente sucesión de números basada en la cantidad de chapas que recibe cada alumno al participar en una feria escolar: 3, 8, 15, 24, … ¿Cuál será la cantidad de chapas que recibirá el siguiente alumno si la regla que rige la sucesión se mantiene?",
                opciones: ["33", "35", "37", "39"],
                respuestaCorrecta: 1,
                explicacion: "Diferencias: 5, 7, 9 (impares que aumentan en 2). Siguiente: 11. 24+11=35."
            }
            // Hasta aquí las 60 preguntas (de la 33 a la 92)
        ],
        "Razonamiento Lógico Matemático": [
            {
                pregunta: "En una fila de baldosas, cada una tiene el doble de puntos que la anterior. Si la primera baldosa tiene 3 puntos, ¿cuántos puntos tendrá la quinta baldosa?",
                opciones: ["24", "32", "48", "64"],
                respuestaCorrecta: 2,
                explicacion: "La secuencia sigue una regla de multiplicar por 2 en cada paso: 3, 6 (3×2), 12 (6×2), 24 (12×2), 48 (24×2). Por lo tanto, la quinta baldosa tendrá 48 puntos."
            }
        ],
        "Resolución de Problemas Matemáticos": []
    },
    "CONOCIMIENTOS GENERALES": {
        "FÍSICA": [
            {
                pregunta: "¿Cuál es la unidad de medida de la fuerza en el Sistema Internacional?",
                opciones: ["Julio", "Newton", "Vatio", "Pascal"],
                respuestaCorrecta: 1,
                explicacion: "La unidad de medida de la fuerza en el Sistema Internacional es el Newton (N), llamado así en honor a Isaac Newton."
            }
        ],
        "MATEMÁTICA": [],
        "QUÍMICA": [],
        "GEOGRAFÍA": [],
        "PSICOLOGÍA": [],
        "FILOSOFÍA": [],
        "HISTORIA": [],
        "BIOLOGÍA": [],
        "TÉCNICA TECNOLÓGICA": [],
        "LENGUAJE": []
    }
};

// =============================================
// VARIABLES GLOBALES
// =============================================
let preguntas = []; // Array temporal para el examen actual
let preguntaActual = 0;
let respuestasUsuario = [];
let modoRevision = false;
let categoriaSeleccionada = '';
let subcategoriaSeleccionada = '';
let preguntasActuales = [];

// =============================================
// ELEMENTOS DEL DOM
// =============================================
// Pantallas
const menuScreen = document.getElementById('menu-screen');
const submenuScreen = document.getElementById('submenu-screen');
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

// Elementos del menú
const categoriaTitulo = document.getElementById('categoria-titulo');
const subcategoriasContainer = document.getElementById('subcategorias-container');
const seccionTitulo = document.getElementById('seccion-titulo');
const seccionDescripcion = document.getElementById('seccion-descripcion');
const cantidadPreguntasElement = document.getElementById('cantidad-preguntas');

// Botones de navegación
const volverMenuBtn = document.getElementById('volver-menu');
const volverSubmenuBtn = document.getElementById('volver-submenu');
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const restartBtn = document.getElementById('restart-btn');

// Elementos del quiz
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionCounter = document.getElementById('question-counter');
const progressBar = document.getElementById('progress-bar');
const scoreElement = document.getElementById('score');
const totalQuestionsElement = document.getElementById('total-questions');
const scoreMessage = document.getElementById('score-message');
const reviewContainer = document.getElementById('review-container');

// =============================================
// EVENT LISTENERS - MENÚ
// =============================================
document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM cargado - Inicializando event listeners");

    // Event listeners para tarjetas de categoría
    document.querySelectorAll('.categoria-card').forEach(card => {
        card.addEventListener('click', function () {
            categoriaSeleccionada = this.getAttribute('data-categoria');
            console.log("Categoría seleccionada:", categoriaSeleccionada);
            mostrarSubmenu();
        });
    });

    // Botones de navegación
    if (volverMenuBtn) volverMenuBtn.addEventListener('click', volverAlMenu);
    if (volverSubmenuBtn) volverSubmenuBtn.addEventListener('click', volverAlSubmenu);
    if (startBtn) startBtn.addEventListener('click', comenzarExamen);
    if (prevBtn) prevBtn.addEventListener('click', mostrarPreguntaAnterior);
    if (nextBtn) nextBtn.addEventListener('click', mostrarSiguientePregunta);
    if (submitBtn) submitBtn.addEventListener('click', finalizarExamen);
    if (restartBtn) restartBtn.addEventListener('click', reiniciarExamen);

    // Inicializar
    respuestasUsuario = [];
    console.log("Event listeners configurados correctamente");
});

// =============================================
// FUNCIONES DE NAVEGACIÓN DEL MENÚ
// =============================================
function mostrarSubmenu() {
    console.log("Mostrando submenú para:", categoriaSeleccionada);

    if (!bancoPreguntas[categoriaSeleccionada]) {
        console.error("Categoría no encontrada:", categoriaSeleccionada);
        return;
    }

    menuScreen.classList.add('hidden');
    submenuScreen.classList.remove('hidden');

    categoriaTitulo.textContent = categoriaSeleccionada;
    subcategoriasContainer.innerHTML = '';

    const subcategorias = bancoPreguntas[categoriaSeleccionada];

    for (const subcategoria in subcategorias) {
        const cantidad = subcategorias[subcategoria].length;
        const cantidadMostrada = Math.min(cantidad, 20); // Muestra máximo 20

        const card = document.createElement('div');
        card.className = 'subcategoria-card';
        card.innerHTML = `
            <h4>${subcategoria}</h4>
            <div class="contador">${cantidadMostrada} de ${cantidad} preguntas</div>
            <small>(Selección aleatoria)</small>
        `;

        card.addEventListener('click', () => {
            console.log("Subcategoría seleccionada:", subcategoria);
            subcategoriaSeleccionada = subcategoria;

            // Seleccionar máximo 20 preguntas aleatorias
            preguntasActuales = seleccionarPreguntasAleatorias(
                subcategorias[subcategoria],
                20
            );

            mostrarInstrucciones();
        });

        subcategoriasContainer.appendChild(card);
    }

    // Manejo especial para SIMULACRO_COMPLETO
    if (categoriaSeleccionada === "SIMULACRO_COMPLETO") {
        // Juntar todas las preguntas de todas las categorías
        let todasPreguntas = [];
        for (const cat in bancoPreguntas) {
            for (const subcat in bancoPreguntas[cat]) {
                todasPreguntas = todasPreguntas.concat(bancoPreguntas[cat][subcat]);
            }
        }

        // Seleccionar 20 aleatorias
        preguntasActuales = seleccionarPreguntasAleatorias(todasPreguntas, 20);

        subcategoriaSeleccionada = "Simulacro Completo";
        mostrarInstrucciones();
    }
}

function mostrarInstrucciones() {
    console.log("Mostrando instrucciones para:", subcategoriaSeleccionada);

    submenuScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');

    seccionTitulo.textContent = subcategoriaSeleccionada;
    seccionDescripcion.textContent = `Área: ${categoriaSeleccionada}`;

    // Mostrar cantidad real (máximo 20)
    const cantidadReal = preguntasActuales.length;
    cantidadPreguntasElement.textContent = `${cantidadReal} preguntas ${cantidadReal < 20 ? '' : '(selección aleatoria de 20)'}`;
}

function volverAlMenu() {
    console.log("Volviendo al menú principal");

    submenuScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');

    // Resetear selecciones
    categoriaSeleccionada = '';
    subcategoriaSeleccionada = '';
    preguntasActuales = [];
}

function volverAlSubmenu() {
    console.log("Volviendo al submenú");

    startScreen.classList.add('hidden');
    mostrarSubmenu();
}

// =============================================
// FUNCIONES DEL SIMULACRO (EXAMEN)
// =============================================
function comenzarExamen() {
    console.log("Comenzando examen con", preguntasActuales.length, "preguntas");

    if (preguntasActuales.length === 0) {
        alert("No hay preguntas disponibles para esta sección.");
        return;
    }

    // Copiar preguntas al array principal
    preguntas = [...preguntasActuales];

    // Reiniciar estado del examen
    preguntaActual = 0;
    respuestasUsuario = new Array(preguntas.length).fill(null);
    modoRevision = false;

    // Actualizar elementos del quiz
    progressBar.max = preguntas.length;
    totalQuestionsElement.textContent = preguntas.length;

    // Mostrar pantalla del quiz
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Cargar primera pregunta
    cargarPregunta();
}

function cargarPregunta() {
    if (preguntas.length === 0) return;

    const pregunta = preguntas[preguntaActual];

    // Actualizar contadores
    questionCounter.textContent = `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;
    progressBar.value = preguntaActual + 1;

    // Mostrar pregunta
    questionText.textContent = pregunta.pregunta;

    // Limpiar opciones anteriores
    optionsContainer.innerHTML = '';

    // Crear opciones
    pregunta.opciones.forEach((opcion, index) => {
        const opcionElement = document.createElement('div');
        opcionElement.className = 'option';

        // Verificar si ya respondió y estamos en modo revisión
        if (respuestasUsuario[preguntaActual] !== null && modoRevision) {
            if (index === pregunta.respuestaCorrecta) {
                opcionElement.classList.add('correct');
            } else if (index === respuestasUsuario[preguntaActual] && index !== pregunta.respuestaCorrecta) {
                opcionElement.classList.add('incorrect');
            }
        } else if (respuestasUsuario[preguntaActual] === index) {
            opcionElement.classList.add('selected');
        }

        opcionElement.textContent = opcion;

        // Solo permitir clic si no estamos en modo revisión
        if (!modoRevision) {
            opcionElement.addEventListener('click', () => seleccionarOpcion(index));
        }

        optionsContainer.appendChild(opcionElement);
    });

    // Manejar explicación
    const explicacionExistente = document.getElementById('explicacion-texto');
    if (explicacionExistente) {
        explicacionExistente.remove();
    }

    if (respuestasUsuario[preguntaActual] !== null && modoRevision) {
        const explicacionDiv = document.createElement('div');
        explicacionDiv.id = 'explicacion-texto';
        explicacionDiv.className = 'explicacion';
        explicacionDiv.innerHTML = `<strong>Explicación:</strong> ${pregunta.explicacion}`;
        optionsContainer.parentNode.appendChild(explicacionDiv);
    }

    // Actualizar botones de navegación
    prevBtn.disabled = preguntaActual === 0;
    nextBtn.classList.toggle('hidden', preguntaActual === preguntas.length - 1);
    submitBtn.classList.toggle('hidden', preguntaActual !== preguntas.length - 1);
}

function seleccionarOpcion(indice) {
    respuestasUsuario[preguntaActual] = indice;
    modoRevision = true;
    cargarPregunta();

    
}

function mostrarPreguntaAnterior() {
    if (preguntaActual > 0) {
        preguntaActual--;
        modoRevision = respuestasUsuario[preguntaActual] !== null;
        cargarPregunta();
    }
}

function mostrarSiguientePregunta() {
    if (preguntaActual < preguntas.length - 1) {
        preguntaActual++;
        modoRevision = respuestasUsuario[preguntaActual] !== null;
        cargarPregunta();
    }
}

function finalizarExamen() {
    // Ocultar quiz, mostrar resultados
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');

    // Calcular puntaje
    let puntaje = 0;
    preguntas.forEach((pregunta, index) => {
        if (respuestasUsuario[index] === pregunta.respuestaCorrecta) {
            puntaje++;
        }
    });

    // Mostrar resultados
    scoreElement.textContent = puntaje;

    // Mensaje según puntaje
    if (puntaje === preguntas.length) {
        scoreMessage.textContent = "¡Excelente! Dominás todos los temas. 👏";
        scoreMessage.style.color = "#28a745";
    } else if (puntaje >= preguntas.length * 0.7) {
        scoreMessage.textContent = "¡Muy bien! Vas por buen camino. 💪";
        scoreMessage.style.color = "#17a2b8";
    } else {
        scoreMessage.textContent = "Seguí practicando, podés mejorar. 📚";
        scoreMessage.style.color = "#dc3545";
    }

    // Mostrar revisión detallada
    reviewContainer.innerHTML = '';
    preguntas.forEach((pregunta, index) => {
        const revisarItem = document.createElement('div');
        revisarItem.className = 'review-item';

        const esCorrecta = respuestasUsuario[index] === pregunta.respuestaCorrecta;
        const sinResponder = respuestasUsuario[index] === null;

        if (esCorrecta) {
            revisarItem.classList.add('correct-answer');
        } else if (sinResponder) {
            revisarItem.classList.add('no-answer');
        } else {
            revisarItem.classList.add('incorrect-answer');
        }

        const respuestaUsuario = sinResponder ?
            "Sin responder" :
            pregunta.opciones[respuestasUsuario[index]];

        revisarItem.innerHTML = `
            <h4>Pregunta ${index + 1}: ${pregunta.pregunta}</h4>
            <p><strong>Tu respuesta:</strong> ${respuestaUsuario}</p>
            <p><strong>Respuesta correcta:</strong> ${pregunta.opciones[pregunta.respuestaCorrecta]}</p>
            <p><strong>Explicación:</strong> ${pregunta.explicacion}</p>
        `;

        reviewContainer.appendChild(revisarItem);
    });
}

function reiniciarExamen() {
    // Resetear variables
    preguntaActual = 0;
    respuestasUsuario = new Array(preguntas.length).fill(null);
    modoRevision = false;

    // Volver a instrucciones
    resultsScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

// =============================================
// INICIALIZACIÓN
// =============================================
console.log("Simulador de examen cargado correctamente");

// Agregar clase para tarjetas de SIMULACRO_COMPLETO si no existe
if (!bancoPreguntas["SIMULACRO_COMPLETO"]) {
    bancoPreguntas["SIMULACRO_COMPLETO"] = {};
}
// Función para seleccionar preguntas aleatorias (máximo 20)
function seleccionarPreguntasAleatorias(preguntasCompletas, limite = 20) {
    if (preguntasCompletas.length <= limite) {
        return [...preguntasCompletas]; // Devuelve todas si hay menos del límite
    }

    // Mezclar array y tomar solo 'limite' preguntas
    return [...preguntasCompletas]
        .sort(() => Math.random() - 0.5)
        .slice(0, limite);
}