tampilkan = () => {
    let krs = {
        "Kalkulus" : document.getElementById('kalkulus').value,
        "Front End" : document.getElementById('frontEnd').value,
        "Back End" : document.getElementById('backEnd').value,
        "Basis Data" : document.getElementById('basisData').value
    }
    let hasil = document.getElementById('hasil');
    let text = `
    <table class="table">
    <thead>
        <tr>
            <th scope="col">Mata Kuliah</th>
            <th scope="col">Nilai</th>
            <th scope="col">Score</th>
        </tr>
    </thead>
    <tbody>    
    `
    for (let mataKuliah in krs) {
        let nilai = krs[mataKuliah];
        let score = tentukanScore(nilai);

        text += `
          <tr>
            <td>${mataKuliah}</td>
            <td>${nilai}</td>
            <td>${score}</td>
          </tr>
        `;
    }
    text += 
    `
    </tbody>
    </table>
    `;
    
    hasil.innerHTML = text;
}
tentukanScore = (nilai) => {
    if (nilai >= 85 && nilai <= 100) {
        return 'A';
    } else if (nilai >= 75 && nilai <=84) {
        return 'B';
    } else if (nilai >= 65 && nilai <=74) {
        return 'C';
    } else if (nilai >= 50 && nilai <=64) {
        return 'D';
    } else if (nilai <= 49){
        return 'E';
    } else {
        return 'Melampaui Batas';
    }
}

    
    
    
    


























    
    // let pesan = matkul.map(e => {
    //     if (e >= 85) {
    //         return `Nilai kalkulus kamu: ${e}, Grade: A`;
    //     } else if (e >= 75) {
    //         return `Nilai kalkulus kamu: ${e}, Grade: B`;
    //     } else if (e >= 65) {
    //         return `Nilai kalkulus kamu: ${e}, Grade: C`;
    //     } else if (e >= 50) {
    //         return `Nilai kalkulus kamu: ${e}, Grade: D`;
    //     } else {
    //         return `Nilai kalkulus kamu: ${e}, Grade: E`;
    //     }
    // });

    // hasil.innerHTML = pesan.join(`<br>`);