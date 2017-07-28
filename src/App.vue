<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  width: 1366px;
  margin:0 auto;
}

input,textarea{
	border:solid 1px #d6e1e5;
}

 :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #d6e1e5;  
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #d6e1e5;
}

input:-ms-input-placeholder{
    color: #d6e1e5;
}

input::-webkit-input-placeholder{
    color: #d6e1e5;
}
select {
  appearance:none;
 -moz-appearance:none;
 -webkit-appearance:none;  
}
</style>
