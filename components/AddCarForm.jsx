export default function AddCarForm() {
  return (
    <div
      class='rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-2xl'
      data-v0-t='card'
    >
      <div class='flex flex-col space-y-1.5 p-6'>
        <h3 class='whitespace-nowrap text-2xl font-semibold leading-none tracking-tight'>
          Информация об автомобиле
        </h3>
        <p class='text-sm text-muted-foreground'>
          Заполните подробную информацию о вашем автомобиле.
        </p>
      </div>
      <div class='p-6'>
        <form class='grid gap-4'>
          <div class='grid grid-cols-2 gap-4'>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                for='make'
              >
                Марка
              </label>
              <input
                class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='make'
                placeholder='Введите марку авто'
              />
            </div>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                for='model'
              >
                Модель
              </label>
              <input
                class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='model'
                placeholder='Введите модель авто'
              />
            </div>
          </div>
          <div class='grid grid-cols-2 gap-4'>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                for='year'
              >
                Год выпуска
              </label>
              <input
                class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='year'
                placeholder='Введите год выпуска'
                type='number'
              />
            </div>
            <div class='space-y-2'>
              <label
                class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                for='mileage'
              >
                Пробег
              </label>
              <input
                class='flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
                id='mileage'
                placeholder='Введите пробег авто'
                type='number'
              />
            </div>
          </div>
          <div class='space-y-2'>
            <label
              class='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              for='description'
            >
              Описание
            </label>
            <textarea
              class='flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]'
              id='description'
              placeholder='Введите краткое описание авто'
            ></textarea>
          </div>
        </form>
      </div>
      <div class='flex items-center p-6'>
        <button
          class='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'
          type='submit'
        >
          Сохраните информацию
        </button>
      </div>
    </div>
  )
}
