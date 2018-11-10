<template>
  <div id="rotating-anim">
    <canvas width="800" height="400" id="canvas">
    </canvas>
  </div>

</template>

<script>
  export default {
    name: "RotatingAnim"
    ,
    methods: {
      drawCircle: function (ctx, X, Y,circleR) {
        ctx.beginPath();
        // const rotatedX = X + Math.cos(angle ) * radius;
        // const rotatedY = Y + Math.sin(angle ) * radius;
        ctx.arc(X, Y, circleR, 0, 2 * Math.PI, true);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgb(' + X +','+ Y +', 0)';
        ctx.stroke();
        return ctx;
      },
      animateCircle: function (sampleCount, canvas, circleRadius, maxAmp, t) {
        const width = canvas.width;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i<=width; i+=sampleCount) {
          let wavelength = 10;
          let v = 1;
          let y = (maxAmp * Math.cos(((2*Math.PI)/wavelength)*(i - (v*t))))

          this.drawCircle(ctx, i, y + 100, circleRadius)
        }

      }
    },
    mounted: function () {
      const canvas = document.getElementById('canvas');
      if (canvas.getContext) {
        const circleRadius = 4;

        const sampleCount = circleRadius *2.25;
        const maxAmp = 50;
        let t = 0;

        const onAnimationFrame = () => {
          t+=0.01;
          this.animateCircle(sampleCount, canvas, circleRadius, maxAmp, t);
          requestAnimationFrame(onAnimationFrame);
        };
        requestAnimationFrame(onAnimationFrame);

      }
    }
  }

</script>

<style scoped>

  #rotating-anim {
    display: block;

    display: block;
    margin-left: auto;
    background-position: top center;
    margin-left:25%;

    margin-right: auto;

  }


  /*#canvas {*/
    /*padding-left: 0;*/
    /*padding-right: 0;*/
    /*margin-top: 10%;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
    /*display: block;*/
    /*!*width: 800px;*!*/
    /*!*height:400px;*!*/
  /*}*/

</style>
