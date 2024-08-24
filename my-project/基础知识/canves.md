除了绘制矩形，`<canvas>` 还可以绘制多种图形，包括但不限于以下几种：

1. **圆形**：使用 `arc` 方法。
   ```javascript
   ctx.beginPath();
   ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
   ctx.fillStyle = 'blue';
   ctx.fill();
   ```

2. **线段**：通过 `moveTo` 和 `lineTo` 方法结合。
   ```javascript
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.strokeStyle ='red';
   ctx.stroke();
   ```

3. **多边形**：多次使用 `lineTo` 方法连接顶点。
   ```javascript
   ctx.beginPath();
   ctx.moveTo(x1, y1);
   ctx.lineTo(x2, y2);
   ctx.lineTo(x3, y3);
   // 连接回起点以形成封闭多边形
   ctx.lineTo(x1, y1);
   ctx.fillStyle = 'green';
   ctx.fill();
   ```

4. **曲线**：如贝塞尔曲线，使用 `quadraticCurveTo` 或 `bezierCurveTo` 方法。

5. **文本**：
   ```javascript
   ctx.fillText('Hello', x, y);
   ```

6. **图像**：可以将外部图像加载到画布上。
   ```javascript
   var img = new Image();
   img.src = 'image.jpg';
   img.onload = function() {
     ctx.drawImage(img, x, y);
   };
   ```

通过组合和运用这些基本的绘图方法，可以创建出各种复杂和精美的图形效果。 
