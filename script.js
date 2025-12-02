function volume_sphere() {
    const radius = parseFloat(document.querySelector("#radius").value);
    const volume = document.querySelector("#volume");

    // If radius is negative or invalid → output NaN
    if (isNaN(radius) || radius < 0) {
        volume.value = NaN;
        return false;
    }

    // Volume formula: (4/3) * π * r^3
    let result = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume.value = result.toFixed(4);

    return false; // Prevent page refresh
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
