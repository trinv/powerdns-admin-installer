"""Flask entrypoint for local development and preview discovery."""

from flask import render_template

from powerdnsadmin import create_app


app = create_app()


@app.route('/demo')
def demo():
    """Render a dependency-light visual demo with simulated PowerDNS data."""
    return render_template('demo.html')


if __name__ == "__main__":
    app.run(
        debug=True,
        host=app.config.get("BIND_ADDRESS", "127.0.0.1"),
        port=app.config.get("PORT", 9191),
    )


__all__ = ["app"]
