# CANVAS

## Quy tắc chung
* Tạo khung vẽ:
```
    <canvas id="myCanvas" width="400" height="300" style="border: 1px solid red;">
        Your browser doesn't support canvas
    </canvas>
```
* Tạo đối tượng 2D để vẽ:
```
<script>
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
</script>
```

## Vẽ đường
ctx.moveTo(x,y)
ctx.lineTo(x,y)

* Định dạng nét vẽ
```
ctx.strokeStyle = arrColor[colorIdx];
ctx.stroke();
```