ScanditSDK.configure("AcwvYyTtOx+fAw/oWxAg/7w/zNFaMBqI/W3Pugl9V5O/bXl3uXdJuxUvtwHIf5aaLkP7Lm91GQ7WYBYy7lZUa00h1f/scmxjWysHlLg139UWGhlZBEv1z3RNCDkuGiGjAxZTFs4svtggBoG1h3TCrlz2W8BrtXWXQWQkzGoCky+vf8yuu4wkLZ72hPrGRsApu6ZlLN0mHkEvwkRb57hTIKop6NxjIbW1Y0AbVKGlgsNG1bcs86uLmw1HHQdArnMmwhqWbtHPudM2KyH4DCL8atQscmoN1N9+DMslUoqubDjzKGzF0OcOipNVngdStd7rlvNy6npbR43YvazfS+xxCG3TBZ5vmUC2PjhFkeDS+CLI9PDPLy7LMhMuj8ifePSEVclFLf4dWUhovpelkqZrZe/o3EGn8uH/kUAuPAlMKDPUP+e+w4k3snz5PAWihNvgFS+5CMipmuxVfI4tZ9gwkt/y9GQ8IrofmHjqGxOC2/ZgNNpiCp1Tx/udMJJSYloEfZhVFLFqZlww9BGJDUOSG3pASkZSsRoByeyN8KRYvW7aoGAGv7olrN0vqDX2cRkSRvsJSfjNOxMKtQ4t3PwvlRFA46hZnj+YJ0HoMVFANKqx8xh3HOIBMopwsipGSBxzstyJIgKoXzs736ihCG/BEx9bvyHwUmHyUwQsjNyIWOjJG5mz7BV5TmJmjIksVe99BwPwGF9D7dkZVMcLJ3+3M83LZKvIidNOihzSCDECpOgElVgi+6ZJQRyjzs/tQlCOAsfreOgJi4zEMPJ/PwEtiukCUeIGWqnLz7AvlHyuAqL9XnChyhfVj13iuoCN", {
    engineLocation: "https://cdn.jsdelivr.net/npm/scandit-sdk@5.x/build/",
})
.then(() => {
    return ScanditSDK.BarcodePicker.create(document.getElementById("scandit-barcode-picker"), {
        playSoundOnScan: true,
        vibrateOnScan: true,
        scanSettings: new ScanditSDK.ScanSettings({ enabledSymbologies: ["code128"] }),
    });
})
.then((barcodePicker) => {
    barcodePicker.on("scan", (scanResult) => {
        alert(scanResult.barcodes[0].data);
    });
});