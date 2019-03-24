# Generated by Django 2.1.7 on 2019-03-23 11:33

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0016_auto_20190303_1504'),
    ]

    operations = [
        migrations.AddField(
            model_name='daytasks',
            name='startDate',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Время задачи'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='daytasks',
            name='expirationTime',
            field=models.DateTimeField(verbose_name='Время выполнения задачи'),
        ),
    ]