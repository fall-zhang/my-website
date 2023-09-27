## 海龟图形的绘制

1. ```python
    import turtle#turtle 的引入
    turtle.setup(720,480,200,200) #设置窗口宽度，长度，窗口位置的x,y坐标
    turtle.penup()#起笔，之后将不会画出轨迹=turtle.pu
    turtle.pendown()#=turtle.pd 落笔
    turtle.pensize()# =turtle.width设置画笔的宽度
    #移动函数
    turtle.fd() #向前走
    turtle.goto()#直接移动到指定位置
    turtle.circle(r,angle) #r=半径，移动过的弧度,默认圆心为左侧方向，为负数时位于右侧
    #控制方向
    turtle.seth(angle) #改变海龟方向x轴正方向为零，逆时针旋转=turtle.setheading()
    turtle.left(angle)#向左面转angle°
    turtle.right(angle)#想右面转
    turtle.color("purple")#改变画笔颜色，或者使用turtle.color(0.63,0.13,0.94)
    #turtle.color((0.63,0.13,0.94))元组类型的颜色表示方式
    turtle.down() #绘制成功后不会退出
```
    
2. 库的引用方式：
    import turtle
    import turtle as t
    from turtle import*
    
3. 其它函数
    ```python
    for i in range(15)#c从0开始，输出到14
    range(2,5) #输出2,3,4,5
    ```