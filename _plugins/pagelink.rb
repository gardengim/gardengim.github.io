module Jekyll
  class PageLinkTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @page_url = text.strip
    end

    def render(context)
      site = context.registers[:site]
      pages = site.pages

      page = pages.find { |p| p["url"] == "#{@page_url}#{".html" unless @page_url == "/"}" }

      title = page["title"]
      icon = page["icon"]

      "<a href='#{@page_url}'>#{icon} <u>#{title}</u></a>"
    end
  end
end

Liquid::Template.register_tag("pagelink", Jekyll::PageLinkTag)
