import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Escolha uma opção:");
        System.out.println("1. Calculadora Simples");
        System.out.println("2. Cálculo do IMC");
        System.out.println("3. Cálculo do INSS");
        System.out.println("4. Cálculo do Imposto de Renda");
        System.out.println("5. Números Pares e Ímpares");
        System.out.println("6. Fatorial de um Número");
        System.out.println("7. Tabuada");

        int opcao = scanner.nextInt();

        switch (opcao) {
            case 1:
                calculadoraSimples();
                break;
            case 2:
                calcularIMC();
                break;
            case 3:
                calcularINSS();
                break;
            case 4:
                calcularIR();
                break;
            case 5:
                paresImpares();
                break;
            case 6:
                calcularFatorial();
                break;
            case 7:
                tabuada();
                break;
            default:
                System.out.println("Opção inválida.");
                break;
        }
    }

    // #Calculadora Simples
    private static void calculadoraSimples() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int num1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int num2 = scanner.nextInt();

        int soma = num1 + num2;
        int subtracao = num1 - num2;
        int multiplicacao = num1 * num2;
        double divisao = num2 != 0 ? (double) num1 / num2 : Double.NaN;

        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + (Double.isNaN(divisao) ? "Não é possível dividir por zero." : divisao));
    }

    // #Cálculo do IMC
    private static void calcularIMC() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu peso (em kg): ");
        double peso = scanner.nextDouble();

        System.out.print("Digite sua altura (em metros): ");
        double altura = scanner.nextDouble();

        double imc = peso / (altura * altura);
        String classificacao;

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc < 24.9) {
            classificacao = "Peso normal";
        } else if (imc < 29.9) {
            classificacao = "Sobrepeso";
        } else {
            classificacao = "Obesidade";
        }

        System.out.println("IMC: " + String.format("%.2f", imc));
        System.out.println("Classificação: " + classificacao);
    }

    // #Cálculo do INSS
    private static void calcularINSS() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu salário bruto: ");
        double salarioBruto = scanner.nextDouble();
        double contribuicao;

        if (salarioBruto <= 1302.00) {
            contribuicao = salarioBruto * 0.075;
        } else if (salarioBruto <= 2571.29) {
            contribuicao = salarioBruto * 0.09;
        } else if (salarioBruto <= 3856.94) {
            contribuicao = salarioBruto * 0.12;
        } else {
            contribuicao = salarioBruto * 0.14;
        }

        double salarioLiquido = salarioBruto - contribuicao;

        System.out.println("Contribuição ao INSS: R$" + String.format("%.2f", contribuicao));
        System.out.println("Salário líquido: R$" + String.format("%.2f", salarioLiquido));
    }

    // #Cálculo do Imposto de Renda
    private static void calcularIR() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu salário bruto: ");
        double salarioBruto = scanner.nextDouble();
        double imposto;

        if (salarioBruto <= 1903.98) {
            imposto = 0;
        } else if (salarioBruto <= 2826.65) {
            imposto = (salarioBruto - 1903.98) * 0.075 - 142.80;
        } else if (salarioBruto <= 3751.05) {
            imposto = (salarioBruto - 2826.65) * 0.15 - 354.80;
        } else if (salarioBruto <= 4664.68) {
            imposto = (salarioBruto - 3751.05) * 0.225 - 636.13;
        } else {
            imposto = (salarioBruto - 4664.68) * 0.275 - 869.36;
        }

        System.out.println("Imposto de Renda: R$" + String.format("%.2f", imposto));
    }

    // #Números Pares e Ímpares
    private static void paresImpares() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o primeiro número: ");
        int num1 = scanner.nextInt();

        System.out.print("Digite o segundo número: ");
        int num2 = scanner.nextInt();

        System.out.println("Números pares:");
        for (int i = num1; i <= num2; i++) {
            if (i % 2 == 0) {
                System.out.print(i + " ");
            }
        }

        System.out.println("\nNúmeros ímpares:");
        for (int i = num1; i <= num2; i++) {
            if (i % 2 != 0) {
                System.out.print(i + " ");
            }
        }
    }

    // #Fatorial de um Número
    private static void calcularFatorial() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número inteiro positivo: ");
        int numero = scanner.nextInt();
        int fatorial = 1;

        while (numero > 0) {
            fatorial *= numero;
            numero--;
        }

        System.out.println("Fatorial: " + fatorial);
    }

    // #Tabuada
    private static void tabuada() {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número inteiro: ");
        int numero = scanner.nextInt();

        System.out.println("Tabuada de " + numero + ":");
        int i = 1;
        while (i <= 10) {
            System.out.println(numero + " x " + i + " = " + (numero * i));
            i++;
        }
    }
}
