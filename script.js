    const lawsData = {
      // === 7 класс ===
      "scale-price-7": {
        id: "scale-price-7",
        title: "Цена деления шкалы",
        grade: "7",
        chapter: "Введение",
        chapterKey: "измерения",
        short: "C = (x₂ − x₁) / n",
        explanation:
          "Цена деления шкалы показывает, какое изменение величины соответствует одному делению прибора.",
        formula: "C = (x₂ − x₁) / n",
        formulaDesc: "x₁ и x₂ — значения ближайших штрихов, n — количество делений между ними.",
        gif: "https://via.placeholder.com/600x260?text=Scale",
        gifCaption: "Измерение величины по шкале прибора."
      },

      "measurement-error-7": {
        id: "measurement-error-7",
        title: "Запись величины с погрешностью",
        grade: "7",
        chapter: "Введение",
        chapterKey: "измерения",
        short: "A = a ± Δa",
        explanation:
          "Любое измерение имеет погрешность. Результат записывают с учётом погрешности, чтобы указать диапазон возможных значений.",
        formula: "A = a ± Δa",
        formulaDesc: "A — истинное значение, a — результат измерения, Δa — абсолютная погрешность.",
        gif: "https://via.placeholder.com/600x260?text=Error",
        gifCaption: "Запись результата измерения с указанием ошибки."
      },

      "mkt-7": {
        id: "mkt-7",
        title: "Основные положения МКТ",
        grade: "7",
        chapter: "Первоначальные сведения о строении вещества",
        chapterKey: "тепловые явления",
        short: "Молекулярно-кинетическая теория",
        explanation:
          "МКТ утверждает, что все тела состоят из мельчайших частиц (молекул и атомов), которые находятся в непрерывном хаотическом движении и взаимодействуют друг с другом.",
        formula: "Формула отсутствует",
        formulaDesc: "В 7 классе основные положения МКТ формулами обычно не записываются.",
        gif: "https://via.placeholder.com/600x260?text=MKT",
        gifCaption: "Движение молекул в газе, жидкости и твёрдом теле."
      },

      "speed-7": {
        id: "speed-7",
        title: "Скорость движения",
        grade: "7",
        chapter: "Механическое движение",
        chapterKey: "механика",
        short: "v = S / t",
        explanation:
          "Скорость показывает, какой путь проходит тело за единицу времени.",
        formula: "v = S / t",
        formulaDesc: "v — скорость, S — путь, t — время.",
        gif: "https://via.placeholder.com/600x260?text=Speed",
        gifCaption: "Пример равномерного движения по дороге."
      },

      "path-7": {
        id: "path-7",
        title: "Путь",
        grade: "7",
        chapter: "Механическое движение",
        chapterKey: "механика",
        short: "S = v·t",
        explanation:
          "Путь равен произведению скорости на время равномерного движения.",
        formula: "S = v*t",
        formulaDesc: "S — путь, v — скорость, t — время.",
        gif: "https://via.placeholder.com/600x260?text=Path",
        gifCaption: "Путь, пройденный телом при равномерном движении."
      },

      "avg-speed-7": {
        id: "avg-speed-7",
        title: "Средняя скорость",
        grade: "7",
        chapter: "Механическое движение",
        chapterKey: "механика",
        short: "vср = Sобщ / tобщ",
        explanation:
          "Средняя скорость на всём пути определяется отношением общего пути ко всему времени движения.",
        formula: "vср = Sобщ / tобщ",
        formulaDesc: "Sобщ — общий путь, tобщ — суммарное время движения.",
        gif: "https://via.placeholder.com/600x260?text=AvgSpeed",
        gifCaption: "Пример среднего значения скорости на маршруте."
      },

      "density-7": {
        id: "density-7",
        title: "Плотность вещества",
        grade: "7",
        chapter: "Взаимодействие тел",
        chapterKey: "механика",
        short: "ρ = m / V",
        explanation:
          "Плотность показывает, какая масса приходится на единицу объёма вещества.",
        formula: "ρ = m / V",
        formulaDesc: "ρ — плотность, m — масса, V — объём.",
        gif: "https://via.placeholder.com/600x260?text=Density",
        gifCaption: "Сравнение материалов одинакового объёма."
      },

      "gravity-7": {
        id: "gravity-7",
        title: "Сила тяжести",
        grade: "7",
        chapter: "Сила и вес",
        chapterKey: "механика",
        short: "F = m*g",
        explanation:
          "Сила тяжести — сила, с которой Земля притягивает тело.",
        formula: "F = m g",
        formulaDesc: "m — масса, g ≈ 9.8 м/с².",
        gif: "https://via.placeholder.com/600x260?text=Gravity",
        gifCaption: "Падение объекта под действием тяжести."
      },

      "weight-7": {
        id: "weight-7",
        title: "Вес тела",
        grade: "7",
        chapter: "Сила и вес",
        chapterKey: "механика",
        short: "P = m*g",
        explanation:
          "Вес — сила, с которой тело действует на опору или подвес.",
        formula: "P = m*g",
        formulaDesc: "P — вес, m — масса тела, g — ускорение свободного падения.",
        gif: "https://via.placeholder.com/600x260?text=Weight",
        gifCaption: "Вес гири на пружинных весах."
      },

      "hooke-7": {
        id: "hooke-7",
        title: "Сила упругости (закон Гука)",
        grade: "7",
        chapter: "Сила и вес",
        chapterKey: "механика",
        short: "F = k*x",
        explanation:
          "Сила упругости пропорциональна деформации тела и направлена противоположно ей.",
        formula: "F = k*x",
        formulaDesc: "k — жёсткость, x — удлинение/сжатие.",
        gif: "https://via.placeholder.com/600x260?text=Hooke",
        gifCaption: "Пружина удлиняется под нагрузкой."
      },

      "pressure-7": {
        id: "pressure-7",
        title: "Давление",
        grade: "7",
        chapter: "Давление твёрдых тел, жидкостей и газов",
        chapterKey: "давление",
        short: "p = F / S",
        explanation:
          "Давление — это сила, действующая на поверхность, делённая на площадь этой поверхности.",
        formula: "p = F / S",
        formulaDesc: "F — сила, S — площадь поверхности.",
        gif: "https://via.placeholder.com/600x260?text=Pressure",
        gifCaption: "Маленькая площадь → большое давление."
      },

      "liquid-pressure-7": {
        id: "liquid-pressure-7",
        title: "Давление жидкости",
        grade: "7",
        chapter: "Давление твёрдых тел, жидкостей и газов",
        chapterKey: "давление",
        short: "p = ρ*g*h",
        explanation:
          "Давление жидкости растёт с глубиной и зависит от плотности жидкости.",
        formula: "p = ρ*g*h",
        formulaDesc: "ρ — плотность жидкости, h — глубина, g — ускорение свободного падения.",
        gif: "https://via.placeholder.com/600x260?text=LiquidPressure",
        gifCaption: "С увеличением глубины давление возрастает."
      },

      "archimedes-7": {
        id: "archimedes-7",
        title: "Сила Архимеда",
        grade: "7",
        chapter: "Давление твёрдых тел, жидкостей и газов",
        chapterKey: "давление",
        short: "F_A = ρж*g*V",
        explanation:
          "На тело, погружённое в жидкость, действует выталкивающая сила.",
        formula: "F_A = ρж*g*V",
        formulaDesc: "ρж — плотность жидкости, V — объём погружённой части.",
        gif: "https://via.placeholder.com/600x260?text=Archimedes",
        gifCaption: "Плавание тела в воде."
      },

      "work-7": {
        id: "work-7",
        title: "Механическая работа",
        grade: "7",
        chapter: "Работа и мощность",
        chapterKey: "механика",
        short: "A = F*S*cosα",
        explanation:
          "Работа равна произведению силы, пути и косинуса угла между направлением силы и движением.",
        formula: "A = F*S*cosα",
        formulaDesc: "F — сила, S — путь, α — угол.",
        gif: "https://via.placeholder.com/600x260?text=Work",
        gifCaption: "Работа силы при перемещении."
      },

      "power-7": {
        id: "power-7",
        title: "Мощность",
        grade: "7",
        chapter: "Работа и мощность",
        chapterKey: "механика",
        short: "P = A / t",
        explanation:
          "Мощность показывает, какая работа совершается за единицу времени.",
        formula: "P = A / t",
        formulaDesc: "A — работа, t — время.",
        gif: "https://via.placeholder.com/600x260?text=Power",
        gifCaption: "Сравнение мощности двигателей."
      },

      "kinetic-energy-7": {
        id: "kinetic-energy-7",
        title: "Кинетическая энергия",
        grade: "7",
        chapter: "Энергия",
        chapterKey: "механика",
        short: "Eₖ = m*v² / 2",
        explanation:
          "Кинетическая энергия — энергия движения тела.",
        formula: "Eₖ = m*v² / 2",
        formulaDesc: "m — масса, v — скорость.",
        gif: "https://via.placeholder.com/600x260?text=Kinetic",
        gifCaption: "Энергия движущегося тела."
      },

      "potential-energy-7": {
        id: "potential-energy-7",
        title: "Потенциальная энергия",
        grade: "7",
        chapter: "Энергия",
        chapterKey: "механика",
        short: "Eₚ = m*g*h",
        explanation:
          "Потенциальная энергия зависит от высоты тела в поле тяжести.",
        formula: "Eₚ = m*g*h",
        formulaDesc: "m — масса, g — ускорение, h — высота.",
        gif: "https://via.placeholder.com/600x260?text=Potential",
        gifCaption: "Груз поднят на высоту."
      },

      "efficiency-7": {
        id: "efficiency-7",
        title: "КПД",
        grade: "7",
        chapter: "Работа и мощность",
        chapterKey: "механика",
        short: "η = (Aз / Aп) * 100%",
        explanation:
          "КПД показывает, какая часть затраченной энергии превращается в полезную работу.",
        formula: "η = (Aз / Aп) * 100%",
        formulaDesc: "Aз — полезная работа, Aп — затраченная работа.",
        gif: "https://via.placeholder.com/600x260?text=Efficiency",
        gifCaption: "Никакой механизм не использует энергию полностью."
      },

      "moment-7": {
        id: "moment-7",
        title: "Момент силы",
        grade: "7",
        chapter: "Момент силы",
        chapterKey: "механика",
        short: "M = F l",
        explanation:
          "Момент силы — мера вращательного действия силы относительно точки опоры.",
        formula: "M = F l",
        formulaDesc: "F — сила, l — плечо силы.",
        gif: "https://via.placeholder.com/600x260?text=Moment",
        gifCaption: "Длинный рычаг увеличивает момент силы."
      },

      // === 8 КЛАСС ===
      "mkt-8": {
        id: "mkt-8",
        title: "Молекулярно-кинетическая теория",
        grade: "8",
        chapter: "Тепловые явления",
        chapterKey: "тепловые явления",
        short: "Основные положения МКТ",
        explanation:
          "Все вещества состоят из мельчайших частиц (атомов, молекул), которые находятся в непрерывном хаотическом движении. Между частицами существуют силы взаимодействия.",
        formula: "Формула отсутствует",
        formulaDesc: "Качественная теория, описывающая свойства вещества.",
        gif: "https://via.placeholder.com/600x260?text=MKT-8",
        gifCaption: "Движение молекул в различных агрегатных состояниях."
      },

      "aggregate-states-8": {
        id: "aggregate-states-8",
        title: "Агрегатные состояния вещества",
        grade: "8",
        chapter: "Тепловые явления",
        chapterKey: "тепловые явления",
        short: "Твёрдое, жидкое, газообразное",
        explanation:
          "Вещество может находиться в трёх основных состояниях: твёрдом (фиксированная форма и объём), жидком (фиксированный объём, форма меняется) и газообразном (нет фиксированной формы и объёма).",
        formula: "Формула отсутствует",
        formulaDesc: "Характеризуется расположением и движением частиц.",
        gif: "https://via.placeholder.com/600x260?text=Aggregate",
        gifCaption: "Переходы между агрегатными состояниями."
      },

      "internal-energy-8": {
        id: "internal-energy-8",
        title: "Внутренняя энергия",
        grade: "8",
        chapter: "Тепловые явления",
        chapterKey: "тепловые явления",
        short: "U = Eк + Eп",
        explanation:
          "Внутренняя энергия тела — сумма кинетической энергии движения его молекул и потенциальной энергии их взаимодействия. Зависит от температуры и агрегатного состояния.",
        formula: "U = Eк + Eп",
        formulaDesc: "Eк — кинетическая энергия молекул, Eп — потенциальная энергия взаимодействия.",
        gif: "https://via.placeholder.com/600x260?text=InternalEnergy",
        gifCaption: "Изменение внутренней энергии при нагревании."
      },

      "heat-transfer-8": {
        id: "heat-transfer-8",
        title: "Способы теплопередачи",
        grade: "8",
        chapter: "Тепловые явления",
        chapterKey: "тепловые явления",
        short: "Теплопроводность, конвекция, излучение",
        explanation:
          "Тепло передаётся тремя способами: теплопроводность (через вещество без перемещения), конвекция (перенос потоками жидкости или газа) и излучение (электромагнитными волнами).",
        formula: "Формула отсутствует",
        formulaDesc: "Различные механизмы передачи тепловой энергии.",
        gif: "https://via.placeholder.com/600x260?text=HeatTransfer",
        gifCaption: "Три способа передачи тепла."
      },

      "heating-cooling-8": {
        id: "heating-cooling-8",
        title: "Нагревание и охлаждение",
        grade: "8",
        chapter: "Изменение агрегатных состояний",
        chapterKey: "тепловые явления",
        short: "Q = cmΔt",
        explanation:
          "Количество теплоты, необходимое для нагревания или выделяемое при охлаждении тела, пропорционально массе, изменению температуры и удельной теплоёмкости вещества.",
        formula: "Q = c m Δt",
        formulaDesc: "Q — количество теплоты, c — удельная теплоёмкость, m — масса, Δt — изменение температуры.",
        gif: "https://via.placeholder.com/600x260?text=Heating",
        gifCaption: "Нагревание жидкости."
      },

      "melting-8": {
        id: "melting-8",
        title: "Плавление",
        grade: "8",
        chapter: "Изменение агрегатных состояний",
        chapterKey: "тепловые явления",
        short: "Q = λm",
        explanation:
          "Количество теплоты, необходимое для плавления кристаллического вещества при температуре плавления, пропорционально массе и удельной теплоте плавления.",
        formula: "Q = λ m",
        formulaDesc: "λ — удельная теплота плавления, m — масса вещества.",
        gif: "https://via.placeholder.com/600x260?text=Melting",
        gifCaption: "Плавление льда при постоянной температуре."
      },

      "vaporization-8": {
        id: "vaporization-8",
        title: "Парообразование",
        grade: "8",
        chapter: "Изменение агрегатных состояний",
        chapterKey: "тепловые явления",
        short: "Q = Lm",
        explanation:
          "Количество теплоты, необходимое для превращения жидкости в пар при температуре кипения, пропорционально массе и удельной теплоте парообразования.",
        formula: "Q = L m",
        formulaDesc: "L — удельная теплота парообразования, m — масса жидкости.",
        gif: "https://via.placeholder.com/600x260?text=Vaporization",
        gifCaption: "Испарение и кипение жидкости."
      },

      "combustion-8": {
        id: "combustion-8",
        title: "Сгорание топлива",
        grade: "8",
        chapter: "Изменение агрегатных состояний",
        chapterKey: "тепловые явления",
        short: "Q = qm",
        explanation:
          "Количество теплоты, выделяемое при полном сгорании топлива, пропорционально его массе и удельной теплоте сгорания.",
        formula: "Q = q m",
        formulaDesc: "q — удельная теплота сгорания, m — масса топлива.",
        gif: "https://via.placeholder.com/600x260?text=Combustion",
        gifCaption: "Выделение тепла при горении."
      },

      "humidity-8": {
        id: "humidity-8",
        title: "Влажность воздуха",
        grade: "8",
        chapter: "Изменение агрегатных состояний",
        chapterKey: "тепловые явления",
        short: "φ = (ρ/ρ₀)·100%",
        explanation:
          "Относительная влажность показывает, насколько водяной пар в воздухе близок к насыщению. Определяется как отношение плотности пара к плотности насыщенного пара при той же температуре.",
        formula: "φ = (ρ/ρ₀) × 100%",
        formulaDesc: "φ — относительная влажность, ρ — плотность пара, ρ₀ — плотность насыщенного пара.",
        gif: "https://via.placeholder.com/600x260?text=Humidity",
        gifCaption: "Измерение влажности гигрометром."
      },

      "electric-charge-8": {
        id: "electric-charge-8",
        title: "Электрический заряд",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "q = N·e",
        explanation:
          "Электрический заряд — физическая величина, характеризующая способность тел к электромагнитному взаимодействию. Существует два вида зарядов: положительные и отрицательные.",
        formula: "q = N e",
        formulaDesc: "N — число элементарных зарядов, e ≈ 1.6×10⁻¹⁹ Кл — элементарный заряд.",
        gif: "https://via.placeholder.com/600x260?text=Charge",
        gifCaption: "Взаимодействие заряженных тел."
      },

      "ohm-law-8": {
        id: "ohm-law-8",
        title: "Закон Ома",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "I = U/R",
        explanation:
          "Сила тока на участке цепи прямо пропорциональна напряжению на этом участке и обратно пропорциональна его сопротивлению.",
        formula: "I = U / R",
        formulaDesc: "I — сила тока, U — напряжение, R — сопротивление.",
        gif: "https://via.placeholder.com/600x260?text=OhmLaw",
        gifCaption: "Зависимость тока от напряжения."
      },

      "resistance-8": {
        id: "resistance-8",
        title: "Сопротивление проводника",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "R = ρ·l/S",
        explanation:
          "Сопротивление проводника зависит от его материала, длины и площади поперечного сечения. Удельное сопротивление характеризует материал проводника.",
        formula: "R = ρ l / S",
        formulaDesc: "ρ — удельное сопротивление, l — длина, S — площадь сечения.",
        gif: "https://via.placeholder.com/600x260?text=Resistance",
        gifCaption: "Зависимость сопротивления от размеров проводника."
      },

      "current-work-8": {
        id: "current-work-8",
        title: "Работа электрического тока",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "A = UIt",
        explanation:
          "Работа электрического тока равна произведению напряжения, силы тока и времени, в течение которого шёл ток.",
        formula: "A = U I t",
        formulaDesc: "U — напряжение, I — сила тока, t — время.",
        gif: "https://via.placeholder.com/600x260?text=CurrentWork",
        gifCaption: "Энергопотребление электрического прибора."
      },

      "current-power-8": {
        id: "current-power-8",
        title: "Мощность электрического тока",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "P = UI",
        explanation:
          "Мощность электрического тока показывает, какая работа совершается за единицу времени. Равна произведению напряжения на силу тока.",
        formula: "P = U I",
        formulaDesc: "P — мощность, U — напряжение, I — сила тока.",
        gif: "https://via.placeholder.com/600x260?text=CurrentPower",
        gifCaption: "Мощность различных электроприборов."
      },

      "joule-lenz-8": {
        id: "joule-lenz-8",
        title: "Закон Джоуля-Ленца",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "Q = I²Rt",
        explanation:
          "Количество теплоты, выделяемое проводником с током, пропорционально квадрату силы тока, сопротивлению и времени прохождения тока.",
        formula: "Q = I² R t",
        formulaDesc: "Q — количество теплоты, I — сила тока, R — сопротивление, t — время.",
        gif: "https://via.placeholder.com/600x260?text=JouleLenz",
        gifCaption: "Нагревание проводника при прохождении тока."
      },

      "electric-current-8": {
        id: "electric-current-8",
        title: "Электрический ток",
        grade: "8",
        chapter: "Электрические явления",
        chapterKey: "электричество",
        short: "I = q/t",
        explanation:
          "Электрический ток — упорядоченное движение заряженных частиц. Сила тока равна отношению заряда, прошедшего через поперечное сечение проводника, ко времени.",
        formula: "I = q / t",
        formulaDesc: "I — сила тока, q — заряд, t — время.",
        gif: "https://via.placeholder.com/600x260?text=Current",
        gifCaption: "Движение заряженных частиц в проводнике."
      },

      // === 9 КЛАСС ===
      "uniform-motion-9": {
        id: "uniform-motion-9",
        title: "Прямолинейное равномерное движение",
        grade: "9",
        chapter: "Кинематика",
        chapterKey: "механика",
        short: "v = S/t",
        explanation:
          "При равномерном прямолинейном движении скорость постоянна и равна отношению пути ко времени.",
        formula: "v = S / t",
        formulaDesc: "v — скорость, S — путь, t — время.",
        gif: "https://via.placeholder.com/600x260?text=UniformMotion",
        gifCaption: "Равномерное движение автомобиля."
      },

      "accelerated-motion-9": {
        id: "accelerated-motion-9",
        title: "Прямолинейное равноускоренное движение",
        grade: "9",
        chapter: "Кинематика",
        chapterKey: "механика",
        short: "v = v₀ + at",
        explanation:
          "Скорость при равноускоренном движении изменяется линейно со временем.",
        formula: "v = v₀ + a t",
        formulaDesc: "v — конечная скорость, v₀ — начальная скорость, a — ускорение, t — время.",
        gif: "https://via.placeholder.com/600x260?text=AcceleratedMotion",
        gifCaption: "Разгон тела с постоянным ускорением."
      },

      "circular-motion-9": {
        id: "circular-motion-9",
        title: "Движение по окружности",
        grade: "9",
        chapter: "Кинематика",
        chapterKey: "механика",
        short: "v = 2πR/T",
        explanation:
          "При равномерном движении по окружности скорость направлена по касательной и постоянна по модулю.",
        formula: "v = 2πR / T",
        formulaDesc: "v — линейная скорость, R — радиус окружности, T — период обращения.",
        gif: "https://via.placeholder.com/600x260?text=CircularMotion",
        gifCaption: "Движение по круговой траектории."
      },

      "newton-first-9": {
        id: "newton-first-9",
        title: "Первый закон Ньютона (закон инерции)",
        grade: "9",
        chapter: "Динамика",
        chapterKey: "механика",
        short: "Закон инерции",
        explanation:
          "Тело сохраняет состояние покоя или равномерного прямолинейного движения, пока воздействие других тел не заставит его изменить это состояние.",
        formula: "Формула отсутствует",
        formulaDesc: "Качественный закон, не имеющий математической формулы.",
        gif: "https://via.placeholder.com/600x260?text=Newton1",
        gifCaption: "Инерция движущегося тела."
      },

      "newton-second-9": {
        id: "newton-second-9",
        title: "Второй закон Ньютона",
        grade: "9",
        chapter: "Динамика",
        chapterKey: "механика",
        short: "F = ma",
        explanation:
          "Ускорение тела прямо пропорционально равнодействующей сил, приложенных к телу, и обратно пропорционально его массе.",
        formula: "F = m a",
        formulaDesc: "F — равнодействующая сила, m — масса тела, a — ускорение.",
        gif: "https://via.placeholder.com/600x260?text=Newton2",
        gifCaption: "Ускорение тела под действием силы."
      },

      "newton-third-9": {
        id: "newton-third-9",
        title: "Третий закон Ньютона",
        grade: "9",
        chapter: "Динамика",
        chapterKey: "механика",
        short: "F₁ = -F₂",
        explanation:
          "Силы, с которыми два тела действуют друг на друга, равны по модулю и противоположны по направлению.",
        formula: "F₁ = -F₂",
        formulaDesc: "F₁ — сила действия, F₂ — сила противодействия.",
        gif: "https://via.placeholder.com/600x260?text=Newton3",
        gifCaption: "Взаимодействие двух тел."
      },

      "gravity-law-9": {
        id: "gravity-law-9",
        title: "Закон всемирного тяготения",
        grade: "9",
        chapter: "Динамика",
        chapterKey: "механика",
        short: "F = G·m₁m₂/r²",
        explanation:
          "Два тела притягиваются друг к другу с силой, прямо пропорциональной произведению их масс и обратно пропорциональной квадрату расстояния между ними.",
        formula: "F = G × (m₁ m₂) / r²",
        formulaDesc: "G — гравитационная постоянная, m₁,m₂ — массы тел, r — расстояние между центрами.",
        gif: "https://via.placeholder.com/600x260?text=GravityLaw",
        gifCaption: "Гравитационное притяжение планет."
      },

      "friction-force-9": {
        id: "friction-force-9",
        title: "Сила трения",
        grade: "9",
        chapter: "Динамика",
        chapterKey: "механика",
        short: "Fтр = μN",
        explanation:
          "Сила трения скольжения пропорциональна силе нормального давления и не зависит от площади соприкасающихся поверхностей.",
        formula: "Fтр = μ N",
        formulaDesc: "μ — коэффициент трения, N — сила нормального давления.",
        gif: "https://via.placeholder.com/600x260?text=Friction",
        gifCaption: "Трение между поверхностями."
      },

      "oscillation-period-9": {
        id: "oscillation-period-9",
        title: "Период колебаний",
        grade: "9",
        chapter: "Колебания и волны",
        chapterKey: "механика",
        short: "T = 1/ν",
        explanation:
          "Период — время одного полного колебания. Обратно пропорционален частоте.",
        formula: "T = 1 / ν",
        formulaDesc: "T — период, ν — частота колебаний.",
        gif: "https://via.placeholder.com/600x260?text=Oscillation",
        gifCaption: "Колебания маятника."
      },

      "wave-length-9": {
        id: "wave-length-9",
        title: "Длина волны",
        grade: "9",
        chapter: "Колебания и волны",
        chapterKey: "механика",
        short: "λ = v/ν",
        explanation:
          "Длина волны — расстояние между ближайшими точками, колеблющимися в одинаковых фазах.",
        formula: "λ = v / ν",
        formulaDesc: "λ — длина волны, v — скорость волны, ν — частота.",
        gif: "https://via.placeholder.com/600x260?text=WaveLength",
        gifCaption: "Распространение волн."
      },

      "ampere-force-9": {
        id: "ampere-force-9",
        title: "Сила Ампера",
        grade: "9",
        chapter: "Электромагнитное поле",
        chapterKey: "электричество",
        short: "F = IBl sinα",
        explanation:
          "Сила, действующая на проводник с током в магнитном поле, пропорциональна силе тока, индукции магнитного поля и длине проводника.",
        formula: "F = I B l sinα",
        formulaDesc: "I — сила тока, B — магнитная индукция, l — длина проводника, α — угол.",
        gif: "https://via.placeholder.com/600x260?text=AmpereForce",
        gifCaption: "Действие силы на проводник с током."
      },

      "lorentz-force-9": {
        id: "lorentz-force-9",
        title: "Сила Лоренца",
        grade: "9",
        chapter: "Электромагнитное поле",
        chapterKey: "электричество",
        short: "F = qvB sinα",
        explanation:
          "Сила, действующая на заряженную частицу, движущуюся в магнитном поле.",
        formula: "F = q v B sinα",
        formulaDesc: "q — заряд частицы, v — скорость, B — магнитная индукция, α — угол.",
        gif: "https://via.placeholder.com/600x260?text=LorentzForce",
        gifCaption: "Движение заряда в магнитном поле."
      },

      "faraday-law-9": {
        id: "faraday-law-9",
        title: "Закон Фарадея",
        grade: "9",
        chapter: "Электромагнитное поле",
        chapterKey: "электричество",
        short: "ε = -ΔΦ/Δt",
        explanation:
          "ЭДС индукции в контуре равна скорости изменения магнитного потока через контур.",
        formula: "ε = -ΔΦ / Δt",
        formulaDesc: "ε — ЭДС индукции, ΔΦ — изменение магнитного потока, Δt — время.",
        gif: "https://via.placeholder.com/600x260?text=FaradayLaw",
        gifCaption: "Возникновение тока при изменении магнитного поля."
      },

      "quantum-energy-9": {
        id: "quantum-energy-9",
        title: "Энергия кванта",
        grade: "9",
        chapter: "Строение атома",
        chapterKey: "тепловые явления",
        short: "E = hν",
        explanation:
          "Энергия кванта электромагнитного излучения пропорциональна его частоте.",
        formula: "E = h ν",
        formulaDesc: "h — постоянная Планка, ν — частота излучения.",
        gif: "https://via.placeholder.com/600x260?text=QuantumEnergy",
        gifCaption: "Излучение и поглощение квантов энергии."
      },

      "radioactive-decay-9": {
        id: "radioactive-decay-9",
        title: "Закон радиоактивного распада",
        grade: "9",
        chapter: "Строение атома",
        chapterKey: "тепловые явления",
        short: "N = N₀e^(-λt)",
        explanation:
          "Количество нераспавшихся ядер убывает со временем по экспоненциальному закону.",
        formula: "N = N₀ e^(-λt)",
        formulaDesc: "N — текущее количество ядер, N₀ — начальное количество, λ — постоянная распада, t — время.",
        gif: "https://via.placeholder.com/600x260?text=RadioactiveDecay",
        gifCaption: "Процесс радиоактивного распада."
      },

      "half-life-9": {
        id: "half-life-9",
        title: "Период полураспада",
        grade: "9",
        chapter: "Строение атома",
        chapterKey: "тепловые явления",
        short: "T½ = ln2/λ",
        explanation:
          "Время, за которое распадается половина исходного количества радиоактивных ядер.",
        formula: "T½ = ln2 / λ",
        formulaDesc: "T½ — период полураспада, λ — постоянная распада.",
        gif: "https://via.placeholder.com/600x260?text=HalfLife",
        gifCaption: "Уменьшение количества радиоактивного вещества."
      },

      "mass-energy-9": {
        id: "mass-energy-9",
        title: "Эквивалентность массы и энергии",
        grade: "9",
        chapter: "Строение атома",
        chapterKey: "тепловые явления",
        short: "E = mc²",
        explanation:
          "Энергия покоящегося тела пропорциональна его массе (формула Эйнштейна).",
        formula: "E = m c²",
        formulaDesc: "E — энергия, m — масса, c — скорость света.",
        gif: "https://via.placeholder.com/600x260?text=MassEnergy",
        gifCaption: "Связь массы и энергии."
      },

      "momentum-9": {
        id: "momentum-9",
        title: "Импульс тела",
        grade: "9",
        chapter: "Законы сохранения",
        chapterKey: "механика",
        short: "p = mv",
        explanation:
          "Импульс тела равен произведению массы тела на его скорость.",
        formula: "p = m v",
        formulaDesc: "p — импульс, m — масса, v — скорость.",
        gif: "https://via.placeholder.com/600x260?text=Momentum",
        gifCaption: "Передача импульса при столкновении."
      },

      "energy-conservation-9": {
        id: "energy-conservation-9",
        title: "Закон сохранения энергии",
        grade: "9",
        chapter: "Законы сохранения",
        chapterKey: "механика",
        short: "E = Eₖ + Eₚ = const",
        explanation:
          "Полная механическая энергия замкнутой системы остаётся постоянной.",
        formula: "E = Eₖ + Eₚ = const",
        formulaDesc: "E — полная энергия, Eₖ — кинетическая энергия, Eₚ — потенциальная энергия.",
        gif: "https://via.placeholder.com/600x260?text=EnergyConservation",
        gifCaption: "Превращение энергии из одной формы в другую."
      },

      "capacitance-9": {
        id: "capacitance-9",
        title: "Электрическая ёмкость",
        grade: "9",
        chapter: "Электромагнитное поле",
        chapterKey: "электричество",
        short: "C = q/U",
        explanation:
          "Ёмкость проводника показывает, какой заряд нужно сообщить проводнику, чтобы повысить его потенциал на единицу.",
        formula: "C = q / U",
        formulaDesc: "C — ёмкость, q — заряд, U — напряжение.",
        gif: "https://via.placeholder.com/600x260?text=Capacitance",
        gifCaption: "Зарядка и разрядка конденсатора."
      }
    };

    // === ЛОГИКА SPA ===
    const homePage = document.getElementById("page-home");
    const lawPage = document.getElementById("page-law");
    const backBtn = document.getElementById("back-btn");

    const filterGrade = document.getElementById("filter-grade");
    const filterChapter = document.getElementById("filter-chapter");
    const filterSearch = document.getElementById("filter-search");

    const col7 = document.getElementById("cards-7");
    const col8 = document.getElementById("cards-8");
    const col9 = document.getElementById("cards-9");
    const wrap7 = document.getElementById("col-7");
    const wrap8 = document.getElementById("col-8");
    const wrap9 = document.getElementById("col-9");

    // Элементы страницы закона
    const lawTitleEl = document.getElementById("law-title");
    const lawMetaEl = document.getElementById("law-meta");
    const lawExplanationEl = document.getElementById("law-explanation");
    const lawFormulaEl = document.getElementById("law-formula");
    const lawFormulaDescEl = document.getElementById("law-formula-desc");
    const lawGifEl = document.getElementById("law-gif");
    const lawGifCaptionEl = document.getElementById("law-gif-caption");

    function normalize(str) {
      return str.toLowerCase().replace(/ё/g, "е");
    }

    // Рендер карточек по столбцам
    function renderCards() {
      const gradeFilter = filterGrade.value;
      const chapterFilter = filterChapter.value;
      const searchFilter = normalize(filterSearch.value.trim());

      col7.innerHTML = "";
      col8.innerHTML = "";
      col9.innerHTML = "";

      wrap7.style.display = "";
      wrap8.style.display = "";
      wrap9.style.display = "";

      let rendered = 0;

      Object.values(lawsData).forEach((law) => {
        const matchesGrade =
          gradeFilter === "all" || law.grade === gradeFilter;

        const matchesChapter =
          chapterFilter === "all" || law.chapterKey === chapterFilter;

        const searchableText =
          normalize(
            law.title +
              " " +
              law.short +
              " " +
              law.formula +
              " " +
              law.chapter +
              " " +
              law.explanation
          );

        const matchesSearch =
          !searchFilter || searchableText.includes(searchFilter);

        if (!matchesGrade || !matchesChapter || !matchesSearch) return;

        const card = document.createElement("article");
        card.className = "card";
        card.dataset.lawId = law.id;

        card.innerHTML = `
          <div>
            <h3 class="card-title">${law.title}</h3>
            <p class="card-subtitle">${law.chapter} • ${law.grade} кл.</p>
            <div class="card-formula">${law.short}</div>
          </div>
          <div class="card-tags">
            <span class="tag">${law.chapter}</span>
          </div>
        `;

        card.addEventListener("click", () => openLaw(law.id));

        if (law.grade === "7") col7.appendChild(card);
        else if (law.grade === "8") col8.appendChild(card);
        else if (law.grade === "9") col9.appendChild(card);

        rendered++;
      });

      // Скрываем лишние столбцы, если выбран конкретный класс
      if (gradeFilter === "7") {
        wrap8.style.display = "none";
        wrap9.style.display = "none";
      } else if (gradeFilter === "8") {
        wrap7.style.display = "none";
        wrap9.style.display = "none";
      } else if (gradeFilter === "9") {
        wrap7.style.display = "none";
        wrap8.style.display = "none";
      }

      if (rendered === 0) {
        col7.innerHTML =
          '<p style="color:#9ca3af;font-size:0.9rem;">Ничего не найдено. Попробуй изменить фильтры или поиск.</p>';
        col8.innerHTML = "";
        col9.innerHTML = "";
      }
    }

    // Открыть страницу закона
    function openLaw(id) {
      const law = lawsData[id];
      if (!law) return;

      homePage.classList.remove("active");
      lawPage.classList.add("active");

      lawTitleEl.textContent = law.title;
      lawMetaEl.textContent = `${law.chapter} • ${law.grade} класс`;
      lawExplanationEl.textContent = law.explanation;
      lawFormulaEl.textContent = law.formula;
      lawFormulaDescEl.textContent = law.formulaDesc;
      lawGifEl.src = law.gif;
      lawGifCaptionEl.textContent = law.gifCaption;
    }

    // Назад
    backBtn.addEventListener("click", () => {
      lawPage.classList.remove("active");
      homePage.classList.add("active");
    });

    filterGrade.addEventListener("change", renderCards);
    filterChapter.addEventListener("change", renderCards);
    filterSearch.addEventListener("input", renderCards);

    // Стартовый рендер
    renderCards();
