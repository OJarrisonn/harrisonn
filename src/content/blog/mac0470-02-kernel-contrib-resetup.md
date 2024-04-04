---
title: '[MAC0470#02] - Reiniciando o Setup'
description: 'Tentando novamente configurar o setup'
pubDate: 'Apr 04 2024'
heroImage: '/kernel-dev.jpg'
---

No [post anterior](/blog/mac0470-01-kernel-contrib-setup), tudo ia muito bem até que tudo deu errado. Então, em casa, com calma, recomecei os tutoriais com mais atenção (e agora um pouco mais de experiência com os problemas que eu poderia encontrar).

## Virt-Resize

Já no início esbarrei com um problema ao executar o `virt-resize` para redimensionar a imagem que estavamos usando. Durante as aulas a solução que encontrei foi usar `sudo`, porém isso trouxe foi que todos comandos que envolviam o uso das imagens da máquina virtual acabavam precisando de usar `sudo` também. Pesquisando _on-line_ acabei encontrando o [motivo](https://askubuntu.com/questions/1046828/how-to-run-libguestfs-tools-tools-such-as-virt-make-fs-without-sudo). Por algum motivo, o _kernel_ instalado na máquina _host_ não possui permissão de leitura, então duas soluções me foram oferecidas:

- Baixar um kernel alternativo e informar a sua existência para o `libguestfs` usando uma variável de ambiente
- Dar a permissão de leitura para o _kernel_ instalado na minha máquina usando `sudo chmod +r /boot/vmlinuz*`

A segunda opção, apesar de me parecer a menos segura foi a que acabou funcionando comigo. Não explorei as eventuais problemas de segurança que minha ação possa ter tido. Caso esteja lendo isso, execute o comando `chmod` informado por sua própria conta e risco.

## SSHD

Superada a primeira barreira, consegui iniciar a máquina virtual. Dessa vez, o problema com o _ssh_ foi simples de ser resolvido. Bastou seguir o tutorial e, após reiniciar a máquina virtual, rodar novamente o comando `dpkg-reconfigure`. Com isso o _deamon_ de _ssh_ funcionou perfeitamente e pude obter a lista de módulos (etapa listada como opcional, mas que na minha visão foi crucial para a compilação do _kernel_ posteriormente).

## Compilando

Com tudo configurado, agora era hora de compilar o _kernel_ pela primeira vez. A compilação foi muito mais rápida e sem surpresas. Dessa vez pois usei a lista de módulos que coletei da máquina virtual e pois ativei o "modo performance" da minha máquina (opção de economia de energia do Ubuntu). Agora a compilação foi feita em "apenas" 7 minutos (antes levava 20).

Enquanto terminava o tutorial, deparei que esqueci de fazer uma modificação sugerida no `simple_mod.c`. Isso me levou a minha primeira experiência de compilação sem estar seguindo o passo a passo. Foi bastante simples, bastou executar o `make M=drivers/misc/`, copiar o `.ko` para a localização correta dentro da máquina virtual, usar o `modprobe` para instalar e remover o módulo e ver o log do `dmesg` para ver a execução correta da versão modificada do `simple_mod.c`

## Conclusão

Toda a confusão que tive enquanto tentei realizar o setup pela primeira vez foi resolvida apenas lendo os textos com mais atenção e pesquisando melhor na internet por pessoas que tiveram o mesmo problema. Na maioria das vezes, ao invés de consertar uma gambiarra com outra, é muito mais eficaz se desfazer de tudo e recomeçar usando a experiência que você adquiriu.