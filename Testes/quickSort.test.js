
    const algoritmo = require('./algoritmos');

    // Teste 01: ordenação com números inteiros
    test('Ordenando uma sequencia aleatório de números', () => {
        var vetor = [41, -5, 1 ,43, 201];
        algoritmo.quickSort(vetor, 0, vetor.length-1);
        expect(vetor).toStrictEqual([-5, 1, 41, 43, 201]);
    });

    // Teste 02 ordeação com números decimais:
    test('Ordenando uma sequencia aleatório de números', () => {
        var vetor = [42.4, -5.12, 1.6 ,3.33, -44.4];
        algoritmo.quickSort(vetor, 0, vetor.length-1);
        expect(vetor).toStrictEqual([-44.4, -5.12, 1.6, 3.33, 42.4]);
    });

    // Teste 03 ordeação da primeira metado do vetor:
    test('Ordenando uma sequencia aleatório de números', () => {
        var vetor = [23, -5, 441 ,221, 42, -33];
        algoritmo.quickSort(vetor, 0, parseInt((vetor.length-1)/2));
        expect(vetor).toStrictEqual([-5, 23, 441, 221, 42, -33]);
    });

    // Teste 04 ordeação da segunda metado do vetor:
    test('Ordenando uma sequencia aleatório de números', () => {
        var vetor = [23, -5, 441 ,221, 42, -33];
        algoritmo.quickSort(vetor, parseInt(vetor.length/2), vetor.length-1);
        expect(vetor).toStrictEqual([23, -5, 441 ,-33, 42, 221]);
    });