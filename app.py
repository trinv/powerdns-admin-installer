"""Flask entrypoint for local development and preview discovery."""

from powerdnsadmin import create_app


app = create_app()


if __name__ == "__main__":
    app.run(
        debug=True,
        host=app.config.get("BIND_ADDRESS", "127.0.0.1"),
        port=app.config.get("PORT", 9191),
    )


__all__ = ["app"]
