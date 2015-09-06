# Robot_Speaker

### robot_speaker 是一个用来逐字显示文本的jQuery插件, 如果你感兴趣的话请随便使用.

### 用法:

1. 首先引入JS脚本文件

   ```
    <script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.robot_speaker.js"></script>
   ```

2. 在HTML文件里准备一个容器

    <div class="robot-speaker"></div>

3. 编写执行脚本,参考以下代码

    <script type="text/javascript">
        $(document).ready(function() {
            $container = $(".robot-speaker");

			//初始化
            $container.init_robot({
          	  container: $container, //设置容器
          	  interval: 300,		 //字符显示时间间隔
          	  pausekey: '`',		 //设置停顿字符
          	  deletekey: '@'		 //设置清除字符
            });

            $container.mouseenter(function() {
          	  $(this).speak("hello,` world!``@I'm Robot Speaker!");
            });

            $container.mouseleave(function() {
          	  $(this).nospeak().html('');
            });
        });
    </script>

