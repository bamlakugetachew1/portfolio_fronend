const Technologies = () => {
  return (
    <div className="mt-10 font-body">
      <h3 className="font-body font-semibold text-xl my-1">Tech Stack</h3>
      <p>Technologies I've been working with recently</p>
      <h3 className="font-body font-semibold text-xl my-1">
        Frontend Technologies
      </h3>
      <div className="flex flex-wrap gap-3">
        <img className="w-12 md:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="html"/>
        <img className="w-12 md:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="css"/>
        <img className="w-12 md:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" alt="tailwindcss"/>
        <img className="w-12 md:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="javascript"/>
        <img className="w-12 md:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="vue js"/>
        <img className="w-12 md:w-16" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" alt="jquery"/>
        <img className="w-12 md:w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKb2x36MeTzkAlib0jwKjvLpkJ4s2ofH-ZfTKc35T1A&s" alt="react"/>
        <img className="w-12 md:w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj1N-6rXLoh3-fDPk5GYLP2OKtUtMx49ApwU3QNcSY2w&s" alt="redux"/>
        <img className="w-12 md:w-16" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAkFBMVEX///8AgcsAsP8Arf8Af8oAfMmP0P9RldKPuOAAqv8AdcfK6P/K3fAAecj4/P9Svf8AidTk7fcAq/glhMzq9v/v9vtAkdGW1f+AzP9goNfQ6//Y5/Syz+pyqtre8v+v0u+94/9zx/+Xv+Nlw/+oyeeo3P8wtv++1u0yi88AcMWBsd0nkdWy4P9QntwApf8AmeXNmQJWAAAEP0lEQVR4nO3Za3eiOhQGYAiJF2pQRFS8zFjbepue6f//d5NYRJLsSKLBWWtO3o80rU9hm8smCHx8fHx8fHx8fHx8fHx8/qH8cPNnUsvr9XTeHCDyUxcGFD0TQh91kgcFqyyGCEkPUyNChCK0eQQwmMYYA4Q9ppgYEhDqD1/uBaRFjMNQJQymlF03J6Aoep3cA0h6IQlDlZCvyfm6BYEh0MxesM/4v6oStvgMsCTwO7GxA/Ai+P4kkZBSerluSWCI4cIckK7J5YMkwiCurlsT2I2Y54aCbUbDsAWCcUnsDxSHLRE4ovELuuzGAsA1gSFuz9n5iZAwbJfASqKj/4V3oQjaInDEBzx8kMnP4AYBUzK4m8AQO6AklgWFABoCwT2jBVBHYIhXqSQus7EZAZPCZLNwkyCXxCrT3AKIgOPD3gxwk8ARn5dxywNYBBoCxe+mgAZCNWcLs3Ej4YhPppOsTIA05zl7G0JfRKIjTJcWAIEQzXZ9CIF+QUVA6TbDIMHmDkiE/iL4AO/ESAUQckpSDcE2dQKbCSavkYpQCJgW7F63RAiChfo0RjIgW/GRrRGC4FNGiARCtt/jWiQEyUwsiZEAWF/KrU0CK4m3eklcCZh2rwtPu4QgeKk9jYpASX3SMyAsTSZJHaFeEqOqCISVr5GQro+W+wWJEEw6ZUmcCerK10BIthmx3bLIBHbyH0YlAdODsvu4TdjzU8bjhLIkRvDKd4tQ7nBdEAI+Z7O/BM37ekJ6KlcVN4RgMv8PXvm0hOsxxxFBl0mhO9Adqx+0SshPx9oK7moTb0FI3jNhJ/t8wkA+0T2bMCmUnexzCXmPqqeJhwizvh1hdQB2siEtHiAks2pZNiAs1WfA78FR2LTbEhhi3o/MCJM1CIil9cueUK1GDYR8q/YVOGAqr1/3EIJgs4uaCPspdJog4VY5Pd9H4GUZ3SKkxREsgjXQMb2XEOTz31pCblYEjxLYCULXdfyJob4CPazg4St6N0GXZPgVKjdB3kheR/dqg90REPolrQnHtaaFssL1qcslAY1Htd0B7WqO7wPpa+OUgNDXBUEPmtNBrjRCHBMYAvO3HPFJ00cDpi7nBF4SVNdHY0WgfnFbIKCvn/CYZRecO6lF18uUgHYz4DEka3D50FbtYwTU323kAe8wABt3Hi0J/H2eMI3uwZYoW7+cAVQCO+xeX96kYFsaE93U5YjAEWWnHng3ce7+mnTgHyOUJbEiUEu07IY5TQfqiKLoDd7EGL4CsMzLDuqIjtXPLzuSreQT6IiqBBxnjotAyFxBKAQaOpoMdfnxFt0kELtXAPdFKgmB0GIRiPmoP41xHZC5m40bktRK4kqgTmfjxiyqkhhXRQCdJlrNpuyIjssvonKie0a+T+PjJxeBmJy/vBnzN2Sa08QzshhGY/1G8knZ9P9KEQj5e4/Ax8fHx8fHx8fHx+f/lT+Oj0QywCVlsgAAAABJRU5ErkJggg==" alt="material ui"/>
        <img className="w-12" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXwBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAIIAowMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQYEBQcDAv/EAD8QAAIBAgIECAoJBQEAAAAAAAABAgMEBREGEiExEzJBUWFxsdEWIjNCVHKBkZLBFBU1UpOhwuHxU2NzsvCi/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAEDBAUCBv/EACsRAQACAQIFAgYDAQEAAAAAAAABAgMEERITITFRFEEyM0JSYYFiccGxIv/aAAwDAQACEQMRAD8AuYADExG+p2Fs6tTa90YrfJluLFbLbhh6rWbTtCoXeKXd5JupWlGL3Qg8kjs49Pjxx0hrrStWIXPYSAEBAAAgAACAABAQ9KVxWoS1qNWdNr7ssjzalbdLQiYiVmwTG3dTVtdZcLl4s92v0Zc5ytTpeXHHTsovTbrDfGFUAAAACo6S13UxHgvNpRSXW9r+R2NFSIx8XlrwxtXdqDatAAEBAAAgAACAAACEAAJhOVOcZweUovNPpRExExtJ36Oh29ThrelVW6cFL3o+dtXhtNfDHPd6HlAAAAUvSD7Yr9Uf9UdvSfJhsxfC1xqWAEBAAAgAACAAACEAAAEAdAw77Otf8MOxHz2X5lv7ljnuyStAAAAUrHpa2MXHQ4r/AMo7mk+TVsxfDDXmlYgAEG4DOWDYjJJq1lk9q8Zd5n9Vi8vHMr5PqXEfRZfFHvHqsP3I5lfJ9S4j6LL4o949Vh+45lfJ9S4l6JP4o949Vh+45lfLHr2V1bLOtb1ILncdnvLK5aX+GUxaJ7McsegIAAACAL9hctbDbV/2o9h8/mjbLb+2S3eWWVPIAAAUPEqnC4lczX9Rr3bPkd/BHDjrH4baRtWGKXPYEAES4rA6HQ8hT9Vdh85bvLAVK1OllwlSMM92tJLMiIme0D5+lW/9el8aJ4LeE7SmNelN5Rqwk+iSYmsx3g2fT5mQho8YwOnVpyr2kFCqtrgt0/3N2n1U1nhv2W0ybdJVY6zQAQAABC74BU4TCLd/dTj7nkcLVRtmszXj/wBNkZ3gAAeN1XVvb1a0t0IuR6pXjtFY90xG87KBm283ve1n0TeglAAA+ZcV9QHRKPkKfqrsPnLd5YFc0uWc7TPmn+k6Gh+r9f6vxe6vaq5kdPZeaq5iNkN7o9idZXUbStNzpzT1NZ5uL7jn6rBXh46wpyU6bws5zFKjYrSVDE7mnFZRU817dvzO9p7cWKstVJ3rDELnpAAIALRoncKVvWt29sJay6n/AAcrX02tFlGWOu6wnPVAACvaTX6UFZ0340spVMuRciOhosXXmT+l+Gv1SrR1WgAAQBEuK+oDodHyNP1V2Hzlu8sKu6W8e06p/pOjofq/X+rsXur50l6AhssAoTrYpTnFeLSzlJ83MZNXeK45jyryTtVcW8t7OMzqJiNwrq/r1o8WUtnUti7Dv4acGOKy1VjaNmMWvQACADMwm++r76FZ58G/FmlzP/synPi5tJr7vFo3he4SU4qUWnFrNNcpwJjbpLM+gKzeaTSnBxtKTg3583m17Dp49DETveWiuHy0M5ynNznJylJ5tvlZ0YiIjaF75JAABAES4rCHQqXkafqrsPnbd5YmDiuFRxOVJyrSp8GnuWeeeXcXYc84d9o7vVbcLA8F6XpVT4EaPXW+1ZzZ8PunozbRedStVmuZZRInXXntCObLaUaFCxoatGnqQW16qbb+bMlrWyTvaequZme6v4xjvDwlbWqlCD2TnJZN9CXIb9Ppdp47raU95aI6K4ABAACADZ4Zjdxh6VPLhaP3G8nHqZlzaWuXr2l4tSJbdaVWuW2hXT9neY/QX8w8cuWnu8HvbODnUpKUFvlB55G7HqceSdonqvrkrZgGh7AAEAAIluYQ6DS8jT9Vdh87bvLEwcVxaOGSpKVF1OET3Syyyy7y/DgnLvtL3WvE1/hTD0Sfxov9FP3PXKlK0ppZ+NaVEuiaHoreTlSz7LGLS9koU5uFR7oTWTZnyYL443ns8zSYet7YW99T1a9NOXJNbJLqZ5x5b453rKItMdlPv7OpY3MqNTat8ZLzkdnDljLXihorbihjFqQAACEAe9raV7ypqW9J1Hy5bl1s8XyUxxvaUTMR3bJaM37WbdFdGu+4y+uxfl45kLg0cdQqekOGq0qq4oxypVHlJLzZfudfSZ5vHBbvDTivv0lpjcuQAABCJbn1AdBpeRp+quw+dt3liV7Szj2nVP8ASdDQ/V+v9XYvdXzpLgCM2mmnk1ua5CJjohecPryubChWnxpwTl0vlOFlrFLzWGaY2nZrdKKKlZ063nU55Z9D/hGnRW2vMeXrHPXZWDqrwAEAHraW07y6p29LjTeWfMuVnjJeMdZtKJnaN19s7SlZ28aNGOUV72+dnAvktktxWZpnd7nhABi4lbK7sa1HlcfF6+Qsw35eSLPVZ2ndQj6FtAAQARLisIdApeRp+quw+enuxq/pXx7Tqn+k6Gh+r9f6uxe6vnRXAH1SpzrVI06UXKcnkkjza0VjeUTOy72dD6LZ0aGebpwSb53ynCvbjtNvLLM7y1mk9VRsadLNa1Spnl0L/katHXe+/h7xx1Vg6q8CACALJolbJyr3MluyhHtfyObr79qKck+yzHMVAAABz++pcBfXFPLJRqSyXRnsPocVuKkS21nesPAsSAAIlufUEL/S8jD1V2Hz092NjX2HW9+4O4UnqZ6urLLf/BZjy3x78L1FpjsxfB+w+7U+Nl3q8r1zLC0fsE+JUfXNkery+TmWZttZ29qn9HowhnvaW1+0ovkvf4peZmZ7vuvXp29KVWtNQhHe2RWs2naERG6m4pfyxC64TJxpxWrCL5F3nZwYeVXb3X1rtDEL3oAgABddG6XB4PSeWTm3N+/uyOJq7b5pZ7/E2pleAAAApGOR1cYuelp/kju6Wd8NWvH8MNeaHsABCHtTQG9jpNOMIx+iReSy8p+xz50W/wBSnlfk8KJ+iR/E/Yj0X8jlfk8KJ+iR/EfcPRfyOX+Twon6JH8T9h6KPuOX+XlV0lu5LKlSpU+l5yPddFT3k5ce7V3N1Xu561xVlUa3Z7l1I1UxVpG1YWRER2eRYAEAADAv2Ex1MLtF/ai/yPn8875bf2y27swqQAAAFK0h+2a/VH/VHb0nyY/f/WrH8LWmpYAQEAACAAAIAAQAQAAAQwOhYd9nWv8Ahh2I+ey/Mt/css92SVoAAACmaSU3DF6knunGMl7svkdrRzE4ojw1Yvhas1rEBAAAAQACAAACEAAAACPzYHRLOm6VnQpy40KcYv2I+dyTxXmYZZ7vc8IAAADVY5hjxC3UqWXD0+Ln5y5UatNn5VuvaVlLcMqdOEqc3CpFxnHY4vY0dqJiY3hp7vkkAAEAAAQAAgAgAAAAbrAMInc14XVeDjQh40c/PfJ7DDqtRFY4K91V7e0LgchSAAAACGBrsao0p2kpzpwlJLY3FNo0ae1ovtEvdJmJUp8ZndhqQAAgAACAAEAEAABI3ujlClVqZ1KUJtPY5RTOfrLWrHSVV5Ww5ClJIAAP/9k=" alt="material ui"/>
      </div>
      <h3 className="font-body font-semibold text-xl my-1">
      Backend Technologies
       </h3>
       <div className="flex flex-wrap gap-3">
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="express"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg" alt="spring"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java"/>
       </div>
       <h3 className="font-body font-semibold text-xl my-1">
        Database Technologies & other tools
       </h3>
       <div className="flex flex-wrap gap-3">
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongodb"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" alt="mysql"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="postgres"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm"/>
       <img className="w-12 md:w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg" alt="vscode"/>
       </div>
    </div>
  );
};

export default Technologies;
