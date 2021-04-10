import evaluate from 'ts-expression-evaluator';

interface exportData {
    valid: boolean;
    result: string;
}

export default function calculate(input: string): exportData {
    var result = '';
    input = input.replace(/[X+\-*/]$/, '');

    try {
        result = evaluate (input).toString();
    } catch (e) {
        //Do nothing
    }

    return {
        valid: true,
        result: result
    };
}