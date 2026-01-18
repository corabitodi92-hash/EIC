import "./Tarifs.css";

export default function Tarifs() {
  return (
    <section className="tarifs-page">
      <h1>TARIFS D'ÉCOLAGE : ANNÉE SCOLAIRE 2025-2026</h1>
      <h2>学年费用表</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Désignation</th>
              <th>Garderie</th>
              <th>P1, P2, P3</th>
              <th>CP, CE, CM1</th>
              <th>CM2</th>
              <th>6è, 5è, 4è</th>
              <th>3è</th>
              <th>Seconde</th>
              <th>Première</th>
              <th>Terminale</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Frais d'inscription (新生)</td>
              <td>35 000</td>
              <td>35 000</td>
              <td>35 000</td>
              <td>35 000</td>
              <td>35 000</td>
              <td>40 000</td>
              <td>40 000</td>
              <td>40 000</td>
              <td>40 000</td>
            </tr>

            <tr>
              <td>Frais de réinscription (旧生)</td>
              <td>30 000</td>
              <td>30 000</td>
              <td>30 000</td>
              <td>30 000</td>
              <td>30 000</td>
              <td>35 000</td>
              <td>35 000</td>
              <td>35 000</td>
              <td>35 000</td>
            </tr>

            <tr>
              <td>Frais supplémentaires (学杂费)</td>
              <td colSpan="9">11 500 **</td>
            </tr>

            <tr>
              <td>Examens d'ETAT (国考费)</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>10 000</td>
              <td>-</td>
              <td>15 000</td>
              <td>-</td>
              <td>-</td>
              <td>25 000</td>
            </tr>

            <tr>
              <td>Fête de Noël (圣诞派对)</td>
              <td>10 000</td>
              <td>10 000</td>
              <td>10 000</td>
              <td>10 000</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>

            <tr>
              <td>Frais scolaires de sept (9月学费)</td>
              <td>20 000</td>
              <td>20 000</td>
              <td>20 000</td>
              <td>25 000</td>
              <td>30 000</td>
              <td>32 500</td>
              <td>35 000</td>
              <td>40 000</td>
              <td>50 000</td>
            </tr>

            <tr>
              <td>Frais mensuels (月学费)</td>
              <td>40 000</td>
              <td>40 000</td>
              <td>40 000</td>
              <td>50 000</td>
              <td>60 000</td>
              <td>65 000</td>
              <td>70 000</td>
              <td>80 000</td>
              <td>100 000</td>
            </tr>

            <tr className="total">
              <td>Écolages annuels (学费合计)</td>
              <td>380 000</td>
              <td>380 000</td>
              <td>380 000</td>
              <td>475 000</td>
              <td>570 000</td>
              <td>617 500</td>
              <td>665 000</td>
              <td>760 000</td>
              <td>950 000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="note">
        N.B : Les parents ayant <strong>3 enfants ou plus</strong> bénéficient
        d’une <strong>remise de 10 %</strong> sur les frais mensuels.
      </p>
    </section>
  );
}