FROM postgres:latest

ENV POSTGRES_DB=mydatabase
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

EXPOSE 5433

# Declare a volume for the PostgreSQL data directory.
# This ensures that your database data persists even if the container is removed.
# When you run the container, you will map a host directory or a Docker-managed volume
# to this path.
COPY ./postgresdb/*.sql /docker-entrypoint-initdb.d/

# The official PostgreSQL image already has a CMD defined to start the server,
# so no explicit CMD instruction is needed here.