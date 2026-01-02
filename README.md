# Calculadora de Partidas Rankeadas

Este projeto implementa uma função que calcula o **saldo de vitórias** de um jogador (vitórias − derrotas) e classifica o **nível** de acordo com o **total de vitórias**.

> **Decisão de regra**: O enunciado original usa `vitórias < 10` para **Ferro** e `11–20` para **Bronze**, o que deixaria o valor **10** sem categoria. Para evitar esse gap, foi adotado **`Ferro <= 10`**.

---

## 🚀 Como funciona

- **Entrada**: número de `vitorias` e `derrotas`.
- **Processamento**:
  - `saldoVitorias = vitorias - derrotas`
  - Classificação de nível **pelo total de vitórias**:
    - `vitorias <= 10` → **Ferro**
    - `11–20` → **Bronze**
    - `21–50` → **Prata**
    - `51–80` → **Ouro**
    - `81–90` → **Diamante**
    - `91–100` → **Lendário**
    - `≥ 101` → **Imortal**
- **Saída**: mensagem
  
  ```text
  O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}
  ```

---

## 🧩 Código

```javascript
// Exemplos de chamadas para teste
ranking(0, 0);     // saldo 0  → Ferro
ranking(9, 0);     // saldo 9  → Ferro
ranking(10, 0);    // saldo 10 → Ferro
ranking(11, 11);   // saldo 0  → Bronze
ranking(20, 5);    // saldo 15 → Bronze
ranking(21, 0);    // saldo 21 → Prata
ranking(50, 40);   // saldo 10 → Prata
ranking(51, 50);   // saldo 1  → Ouro
ranking(80, 79);   // saldo 1  → Ouro
ranking(81, 0);    // saldo 81 → Diamante
ranking(90, 89);   // saldo 1  → Diamante
ranking(91, 0);    // saldo 91 → Lendário
ranking(100, 99);  // saldo 1  → Lendário
ranking(101, 0);   // saldo 101→ Imortal

function ranking(vitorias, derrotas) {
  let nivel = "";
  let saldoVitorias = vitorias - derrotas;

  if (vitorias <= 10) { // No desafio é <10, porém foi adotado <=10 para evitar gap no 10.
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
```

---

## 🧪 Casos de teste e cobertura de limites

Os casos acima cobrem todos os **limites de faixa** e **transições de nível**. Observações:
- É possível ter **saldo baixo** e nível alto (ex.: `vitorias = 95`, `derrotas = 94` → saldo 1, nível **Lendário**), pois o nível é definido **pelo total de vitórias**, não pelo saldo.
- O valor **10** foi incluído em **Ferro** para evitar lacuna entre as faixas.

---

## ✅ Requisitos atendidos

- **Variáveis**: `vitorias`, `derrotas`, `saldoVitorias`, `nivel`.
- **Operadores**: aritméticos (`-`) e lógicos/comparação (`>=`, `<=`, `&&`).
- **Estruturas de decisão**: `if / else if / else`.
- **Funções**: `function ranking(vitorias, derrotas)`.
- **(Opcional) Laços de repetição**: podem ser adicionados para rodar uma lista de casos de teste.

---

## ▶️ Como executar

1. Garanta que você tem o **Node.js** instalado.
2. Salve o código em um arquivo `index.js`.
3. No terminal, execute:
   ```bash
   node index.js
   ```

---

## 📌 Decisões e boas práticas

- **Regra ajustada para o 10**: `Ferro ≤ 10` para evitar lacuna.
- **Ortografia**: usar `Lendário`.
- **Template string**: melhora a legibilidade da saída.
- **Validação (opcional)**: conferir se `vitorias` e `derrotas` são números não negativos para robustez.

---

## 🗂️ Estrutura sugerida de repositório

```
.
├── README.md         # documentação do projeto (este arquivo)
├── index.js          # implementação da função ranking
```

---

## ✨ Autor

- **Alex Pereira da Costa** — Implementação e ajustes de regra.

