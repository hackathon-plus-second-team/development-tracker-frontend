# Яндекс трекер развития - фронтенд
<img width="1068" alt="image" src="https://github.com/hackathon-plus-second-team/development-tracker-frontend/assets/25207136/fffea93e-f008-43f9-ba52-382f2fdc34a4">

# Технологии

- Typescript
- React 18
- Redux-toolkit
- React router
- Vite@4
- Sass
# Требования
Node 18+  
npm 7+

### Коментарии 
Для прохождения доступен только тест по HTML

### Запуск [frontend](https://github.com/hackathon-plus-second-team/development-tracker-frontend)

- клонировать репозиторий

```
git@github.com:hackathon-plus-second-team/development-tracker-frontend.git
```

- запустить сборку контейнеров:

```
docker-compose up -d
```
- проект доступен по адресу:

```
http://localhost:5173/
```

### Запуск [backend](https://github.com/hackathon-plus-second-team/development-tracker-backend/tree/develop)

- клонировать репозиторий

```
git@github.com:hackathon-plus-second-team/development-tracker-backend.git
```

- в директории backend/development_tracker создать файл .env и наполнить его по примеру .env_sample

```
DB_ENGINE=django.db.backends.postgresql
POSTGRES_DB=development_tracker
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
DB_HOST=postgres
DB_PORT=5432

DEBUG=True
```
### Предупреждение

```
Если вы используете Windows, убедитесь, что файл run_app.sh имеет формат конца строки LF
```

- перейти в директорию infra

```
cd infra 
```

- запустить сборку контейнеров:

```
docker-compose up -d
```

- проект доступен по адресу:

```
http://localhost/
```
- документация доступна по адресу:

```
http://localhost/api/dynamic_doc/swagger/v1/
```

- после запуска проекта в базе данных уже есть пользователь:

```
{
    "email": "TestUser@yandex.ru",
    "password": "ZQj-hBQ-c83-fmu"
}
```
- также есть superuser:

```
{
    "email": "admin@yandex.ru",
    "password": "admin"
}
```

